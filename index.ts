import { BunPlugin } from 'bun'
import { readdir } from 'fs/promises';

type EntryPointConfig = {
  from: string,
  to?: string,
  transform?: any
  recursive?: boolean
};

const defaultTransformFunction = (body: string = ''): string => (body);

const normalizeDirectoryPath = (directoryPath: string = '') => {
  return directoryPath.endsWith('/') ? directoryPath : directoryPath + '/';
}

class FileMover {
  constructor(props: EntryPointConfig) {
    this.run(props);

    return this;
  }

  async run({ from = './src', to = './build', transform = defaultTransformFunction, recursive = true }: EntryPointConfig) {
    const files = await readdir(from, { withFileTypes: true });

    for (const file of files) {
      if (file.isFile()) {
        const data = Bun.file(normalizeDirectoryPath(file.path) + file.name);
        const content = await data.text();

        await Bun.write(normalizeDirectoryPath(to) + file.name, transform(content));
      } else if (file.isDirectory() && recursive) {
        await this.run({
          from: normalizeDirectoryPath(from) + file.name,
          to: normalizeDirectoryPath(to) + file.name,
          transform,
        });
      }
    }
  }
}

export const FileMoverPlugin = (config: EntryPointConfig): BunPlugin => {
  return {
    name: 'FileMoverPlugin',
    async setup() {
      new FileMover(config);
    }
  };
}

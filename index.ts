import { BunPlugin, type BunFile } from 'bun';
import { readdir } from 'fs/promises';
import { isText } from 'istextorbinary';

type EntryPointConfig = {
  from: string;
  to?: string;
  transform?: any;
  recursive?: boolean;
};

const defaultTransformFunction = async (body: string = ''): Promise<string> => body;

const normalizeDirectoryPath = (directoryPath: string = '') => {
  return directoryPath.endsWith('/') ? directoryPath : directoryPath + '/';
};

class FileMover {
  constructor(props: EntryPointConfig) {
    this.run(props);

    return this;
  }

  async run({
              from = './src',
              to = './build',
              transform = defaultTransformFunction,
              recursive = true,
            }: EntryPointConfig): Promise<any> {
    const files = await readdir(from, { withFileTypes: true });

    for (const file of files) {
      if (file.isFile()) {
        const data: BunFile = Bun.file(normalizeDirectoryPath(file.path) + file.name);
        const buffer: Buffer = new Buffer(await data.arrayBuffer());

        await Bun.write(
          normalizeDirectoryPath(to) + file.name,
          isText(file.name, buffer) ? await transform(await data.text()) : buffer,
        );
      } else if (file.isDirectory() && recursive) {
        await this.run({
          from: normalizeDirectoryPath(from) + file.name,
          to: normalizeDirectoryPath(to) + file.name,
          transform,
          recursive,
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
    },
  };
};

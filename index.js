// source/index.ts
import {readdir} from "fs/promises";
var defaultTransformFunction = (body = "") => body;
var normalizeDirectoryPath = (directoryPath = "") => {
  return directoryPath.endsWith("/") ? directoryPath : directoryPath + "/";
};

class FileMover {
  constructor(props) {
    this.run(props);
  }
  async run({ from = "./build", to = "./build", transform = defaultTransformFunction }) {
    const files = await readdir(from, { withFileTypes: true });
    for (const file of files) {
      if (file.isFile()) {
        const data = Bun.file(normalizeDirectoryPath(file.path) + file.name);
        const content = await data.text();
        await Bun.write(`${to}/${file.name}`, transform(content));
      } else if (file.isDirectory()) {
        await this.run({
          from: normalizeDirectoryPath(from) + file.name,
          to: normalizeDirectoryPath(to) + file.name,
          transform
        });
      }
    }
  }
}
var Index = (config) => {
  return {
    name: "FileMoverPlugin",
    async setup() {
      new FileMover(config);
    }
  };
};
export {
  Index
};

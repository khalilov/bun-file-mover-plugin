// index.ts
import {readdir} from "fs/promises";

// node_modules/istextorbinary/edition-es2017-esm/index.js
import * as pathUtil from "path";

// node_modules/textextensions/edition-es2022-esm/index.js
var list = [
  "Dockerfile",
  "Makefile",
  "Rakefile",
  "ada",
  "adb",
  "ads",
  "applescript",
  "as",
  "ascx",
  "asm",
  "asmx",
  "asp",
  "aspx",
  "atom",
  "bas",
  "bash",
  "bashrc",
  "bat",
  "bbcolors",
  "bdsgroup",
  "bdsproj",
  "bib",
  "bowerrc",
  "c",
  "cbl",
  "cc",
  "cfc",
  "cfg",
  "cfm",
  "cfml",
  "cgi",
  "clj",
  "cls",
  "cmake",
  "cmd",
  "cnf",
  "cob",
  "coffee",
  "coffeekup",
  "conf",
  "cpp",
  "cpt",
  "cpy",
  "crt",
  "cs",
  "csh",
  "cson",
  "csr",
  "css",
  "csslintrc",
  "csv",
  "ctl",
  "curlrc",
  "cxx",
  "dart",
  "dfm",
  "diff",
  "dockerignore",
  "dof",
  "dpk",
  "dproj",
  "dtd",
  "eco",
  "editorconfig",
  "ejs",
  "el",
  "emacs",
  "eml",
  "ent",
  "erb",
  "erl",
  "eslintignore",
  "eslintrc",
  "ex",
  "exs",
  "f",
  "f03",
  "f77",
  "f90",
  "f95",
  "fish",
  "for",
  "fpp",
  "frm",
  "ftn",
  "gemrc",
  "gitattributes",
  "gitconfig",
  "gitignore",
  "gitkeep",
  "gitmodules",
  "go",
  "gpp",
  "gradle",
  "groovy",
  "groupproj",
  "grunit",
  "gtmpl",
  "gvimrc",
  "h",
  "haml",
  "hbs",
  "hgignore",
  "hh",
  "hpp",
  "hrl",
  "hs",
  "hta",
  "htaccess",
  "htc",
  "htm",
  "html",
  "htpasswd",
  "hxx",
  "iced",
  "inc",
  "ini",
  "ino",
  "int",
  "irbrc",
  "itcl",
  "itermcolors",
  "itk",
  "jade",
  "java",
  "jhtm",
  "jhtml",
  "js",
  "jscsrc",
  "jshintignore",
  "jshintrc",
  "json",
  "json5",
  "jsonld",
  "jsp",
  "jspx",
  "jsx",
  "ksh",
  "less",
  "lhs",
  "lisp",
  "log",
  "ls",
  "lsp",
  "lua",
  "m",
  "mak",
  "map",
  "markdown",
  "master",
  "md",
  "mdown",
  "mdwn",
  "mdx",
  "metadata",
  "mht",
  "mhtml",
  "mjs",
  "mk",
  "mkd",
  "mkdn",
  "mkdown",
  "ml",
  "mli",
  "mm",
  "mxml",
  "nfm",
  "nfo",
  "njk",
  "noon",
  "npmignore",
  "npmrc",
  "nvmrc",
  "ops",
  "pas",
  "pasm",
  "patch",
  "pbxproj",
  "pch",
  "pem",
  "pg",
  "php",
  "php3",
  "php4",
  "php5",
  "phpt",
  "phtml",
  "pir",
  "pl",
  "pm",
  "pmc",
  "pod",
  "pot",
  "properties",
  "props",
  "pt",
  "pug",
  "py",
  "r",
  "rake",
  "rb",
  "rdoc",
  "rdoc_options",
  "resx",
  "rhtml",
  "rjs",
  "rlib",
  "rmd",
  "ron",
  "rs",
  "rss",
  "rst",
  "rtf",
  "rvmrc",
  "rxml",
  "s",
  "sass",
  "scala",
  "scm",
  "scss",
  "seestyle",
  "sh",
  "shtml",
  "sls",
  "spec",
  "sql",
  "sqlite",
  "ss",
  "sss",
  "st",
  "strings",
  "sty",
  "styl",
  "stylus",
  "sub",
  "sublime-build",
  "sublime-commands",
  "sublime-completions",
  "sublime-keymap",
  "sublime-macro",
  "sublime-menu",
  "sublime-project",
  "sublime-settings",
  "sublime-workspace",
  "sv",
  "svc",
  "svg",
  "t",
  "tcl",
  "tcsh",
  "terminal",
  "tex",
  "text",
  "textile",
  "tg",
  "tmLanguage",
  "tmTheme",
  "tmpl",
  "toml",
  "tpl",
  "ts",
  "tsv",
  "tsx",
  "tt",
  "tt2",
  "ttml",
  "txt",
  "v",
  "vb",
  "vbs",
  "vh",
  "vhd",
  "vhdl",
  "vim",
  "viminfo",
  "vimrc",
  "vue",
  "webapp",
  "wxml",
  "wxss",
  "x-php",
  "xaml",
  "xht",
  "xhtml",
  "xml",
  "xs",
  "xsd",
  "xsl",
  "xslt",
  "yaml",
  "yml",
  "zsh",
  "zshrc"
];
var edition_es2022_esm_default = list;

// node_modules/binaryextensions/edition-es2022-esm/index.js
var list2 = [
  "dds",
  "eot",
  "gif",
  "ico",
  "jar",
  "jpeg",
  "jpg",
  "pdf",
  "png",
  "swf",
  "tga",
  "ttf",
  "zip"
];
var edition_es2022_esm_default2 = list2;

// node_modules/istextorbinary/edition-es2017-esm/index.js
function isText(filename, buffer) {
  if (filename) {
    const parts = pathUtil.basename(filename).split(".").reverse();
    for (const extension of parts) {
      if (edition_es2022_esm_default.indexOf(extension) !== -1) {
        return true;
      }
      if (edition_es2022_esm_default2.indexOf(extension) !== -1) {
        return false;
      }
    }
  }
  if (buffer) {
    return getEncoding(buffer) === "utf8";
  }
  return null;
}
function getEncoding(buffer, opts) {
  var _a, _b;
  if (!buffer)
    return null;
  const textEncoding = "utf8";
  const binaryEncoding = "binary";
  const chunkLength = (_a = opts === null || opts === undefined ? undefined : opts.chunkLength) !== null && _a !== undefined ? _a : 24;
  let chunkBegin = (_b = opts === null || opts === undefined ? undefined : opts.chunkBegin) !== null && _b !== undefined ? _b : 0;
  if ((opts === null || opts === undefined ? undefined : opts.chunkBegin) == null) {
    let encoding = getEncoding(buffer, { chunkLength, chunkBegin });
    if (encoding === textEncoding) {
      chunkBegin = Math.max(0, Math.floor(buffer.length / 2) - chunkLength);
      encoding = getEncoding(buffer, {
        chunkLength,
        chunkBegin
      });
      if (encoding === textEncoding) {
        chunkBegin = Math.max(0, buffer.length - chunkLength);
        encoding = getEncoding(buffer, {
          chunkLength,
          chunkBegin
        });
      }
    }
    return encoding;
  } else {
    chunkBegin = getChunkBegin(buffer, chunkBegin);
    if (chunkBegin === -1) {
      return binaryEncoding;
    }
    const chunkEnd = getChunkEnd(buffer, Math.min(buffer.length, chunkBegin + chunkLength));
    if (chunkEnd > buffer.length) {
      return binaryEncoding;
    }
    const contentChunkUTF8 = buffer.toString(textEncoding, chunkBegin, chunkEnd);
    for (let i = 0;i < contentChunkUTF8.length; ++i) {
      const charCode = contentChunkUTF8.charCodeAt(i);
      if (charCode === 65533 || charCode <= 8) {
        return binaryEncoding;
      }
    }
    return textEncoding;
  }
}
var getChunkBegin = function(buf, chunkBegin) {
  if (chunkBegin === 0) {
    return 0;
  }
  if (!isLaterByteOfUtf8(buf[chunkBegin])) {
    return chunkBegin;
  }
  let begin = chunkBegin - 3;
  if (begin >= 0) {
    if (isFirstByteOf4ByteChar(buf[begin])) {
      return begin;
    }
  }
  begin = chunkBegin - 2;
  if (begin >= 0) {
    if (isFirstByteOf4ByteChar(buf[begin]) || isFirstByteOf3ByteChar(buf[begin])) {
      return begin;
    }
  }
  begin = chunkBegin - 1;
  if (begin >= 0) {
    if (isFirstByteOf4ByteChar(buf[begin]) || isFirstByteOf3ByteChar(buf[begin]) || isFirstByteOf2ByteChar(buf[begin])) {
      return begin;
    }
  }
  return -1;
};
var getChunkEnd = function(buf, chunkEnd) {
  if (chunkEnd === buf.length) {
    return chunkEnd;
  }
  let index = chunkEnd - 3;
  if (index >= 0) {
    if (isFirstByteOf4ByteChar(buf[index])) {
      return chunkEnd + 1;
    }
  }
  index = chunkEnd - 2;
  if (index >= 0) {
    if (isFirstByteOf4ByteChar(buf[index])) {
      return chunkEnd + 2;
    }
    if (isFirstByteOf3ByteChar(buf[index])) {
      return chunkEnd + 1;
    }
  }
  index = chunkEnd - 1;
  if (index >= 0) {
    if (isFirstByteOf4ByteChar(buf[index])) {
      return chunkEnd + 3;
    }
    if (isFirstByteOf3ByteChar(buf[index])) {
      return chunkEnd + 2;
    }
    if (isFirstByteOf2ByteChar(buf[index])) {
      return chunkEnd + 1;
    }
  }
  return chunkEnd;
};
var isFirstByteOf4ByteChar = function(byte) {
  return byte >> 3 === 30;
};
var isFirstByteOf3ByteChar = function(byte) {
  return byte >> 4 === 14;
};
var isFirstByteOf2ByteChar = function(byte) {
  return byte >> 5 === 6;
};
var isLaterByteOfUtf8 = function(byte) {
  return byte >> 6 === 2;
};

// index.ts
var defaultTransformFunction = async (body = "") => body;
var normalizeDirectoryPath = (directoryPath = "") => {
  return directoryPath.endsWith("/") ? directoryPath : directoryPath + "/";
};

class FileMover {
  constructor(props) {
    this.run(props);
    return this;
  }
  async run({
    from = "./src",
    to = "./build",
    transform = defaultTransformFunction,
    recursive = true
  }) {
    const files = await readdir(from, { withFileTypes: true });
    for (const file of files) {
      if (file.isFile()) {
        const data = Bun.file(normalizeDirectoryPath(file.path) + file.name);
        const buffer = new Buffer(await data.arrayBuffer());
        await Bun.write(normalizeDirectoryPath(to) + file.name, isText(file.name, buffer) ? await transform(await data.text()) : buffer);
      } else if (file.isDirectory() && recursive) {
        await this.run({
          from: normalizeDirectoryPath(from) + file.name,
          to: normalizeDirectoryPath(to) + file.name,
          transform,
          recursive
        });
      }
    }
  }
}
var FileMoverPlugin = (config) => {
  return {
    name: "FileMoverPlugin",
    async setup() {
      new FileMover(config);
    }
  };
};
export {
  FileMoverPlugin
};

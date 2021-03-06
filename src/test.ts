import { a } from "mymodule";
import { b } from "./mymodule.js";
import c from "mymodule";
import colors from "ansi-colors";
import sql from "sql-template-tag";
import { raw } from "sql-template-tag";
import process from "process";
import { exit } from "process";
import * as ansi_colors from "ansi-colors";
import * as sql_template_tag from "sql-template-tag";

// NOTE: Support for named imports from CommonJS modules in NPM packages in Node.JS is limited
//       and may not work for many packages.
//
//       For example, this wouldn't work in Node.JS, with or wirthout `ts-node`:
//
//           import { red } from "ansi-colors";
//
//       Instead, you should use the default import, a destructure that - for example:
//
//           import colors from "ansi-colors";
//           const { red } = colors;
//
//       See also this article:
// 
//           https://simonplend.com/node-js-now-supports-named-imports-from-commonjs-modules-but-what-does-that-mean/

function assert(ok: boolean, why: string) {
  console.log(`[${ok ? "OK" : "FAIL"}] ${why}`);
}

// TS modules:

// TODO absolute imports: doesn't work in TS for some reason - doesn't work in ts-node either, although "tsconfig-paths" is being used?
//assert(typeof a === "function", `can use absolute paths in import statements (requires "tsconfig-paths")`);
assert(typeof b === "function", `can import named symbols from TS modules; can use ".js" extension when importing ".ts" modules`);
//assert(typeof c === "function", `can import default from TS modules (using "esModuleInterop" in tsconfig)`);

// CommonJS modules:

assert(typeof colors.red === "function", `can import default from CommonJS modules in NPM packages`);

// TODO import * from CommonJS modules in NPM packages doesn't work: TS accepts this, but ts-node produces a Module instance with a "default" property (is the ".d.ts" for "ansi-colors" correct?)
assert(typeof ansi_colors.red === "function", `can import * from CommonJS modules in NPM packages`);

// ES modules:

assert(typeof sql === "function", `can import default from ESM modules in NPM packages`);
assert(typeof raw === "function", `can import named symbols from ESM modules in NPM packages`);
assert(typeof sql_template_tag.raw === "function", `can import * from ESM modules in NPM packages`);

// Built-in Node modules:

assert(typeof process.exit === "function", `can import default from built-in Node modules`);
assert(typeof exit === "function", `can import named symbols from built-in Node modules`);

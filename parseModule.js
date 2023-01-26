import { parse } from "./acorn/src/index.js";

export const parseModule = (src) => {
  const options = {
    ecmaVersion: "2023",
    allowAwaitOutsideFunction: true,
    sourceType: "module",
  };
  return parse(src, options);
};

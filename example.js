import { parse } from "./acorn/src/index.js";
import { parse as parseLoose } from "./acorn-loose/src/index.js";
import * as walk from "./acorn-walk/src/index.js";

console.log(parseLoose("1 / * 4 )[2]", { ecmaVersion: 2020 }));
//console.log(parse("1 * 4", { ecmaVersion: 2020 }));
//console.log(parse("await func();", { ecmaVersion: 2020 })); // NG: top level await
console.log(parse("await func();", { ecmaVersion: "2023", allowAwaitOutsideFunction: true })); // OK: top level await
console.log(parse("async () => { await func(); }", { ecmaVersion: 2020 })); // ok
console.log(parse(`import { CSV } from "https://js.sabae.cc/CSV";`, { ecmaVersion: "2023", allowAwaitOutsideFunction: true, sourceType: "module" })); // OK: import

//walk.full(parse("async () => { 1 + 1 }", { ecmaVersion: 2020 }), node => {
walk.full(parse("1 + 1", { ecmaVersion: 2020 }), node => {
  console.log(`There's a ${node.type} node at ${node.start}-${node.end}`)
});


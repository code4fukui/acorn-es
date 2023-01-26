import * as t from "https://deno.land/std/testing/asserts.ts";
import { parseModule } from "./parseModule.js";

const unbox = (data) => JSON.parse(JSON.stringify(data));

Deno.test("top level await", () => {
  const expect = {
    "type": "Program",
    "start": 0,
    "end": 13,
    "body": [
      {
        "type": "ExpressionStatement",
        "start": 0,
        "end": 13,
        "expression": {
          "type": "AwaitExpression",
          "start": 0,
          "end": 12,
          "argument": {
            "type": "CallExpression",
            "start": 6,
            "end": 12,
            "callee": {
              "type": "Identifier",
              "start": 6,
              "end": 10,
              "name": "func"
            },
            "arguments": [],
            "optional": false
          }
        }
      }
    ],
    "sourceType": "module"
  };
  const p = parseModule("await func();");
  //console.log(JSON.stringify(p, null, 2))
  t.assertEquals(unbox(p), expect);
});

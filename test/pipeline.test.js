import { test } from "node:test";
import assert from "node:assert/strict";
import { sum, isEven } from "../src/math.js";

test("sum adds all numbers in the array", () => {
  assert.equal(sum([1, 2, 3]), 6);
  assert.equal(sum([]), 0);
  assert.equal(sum([-1, 1]), 0);
});

test("sum rejects non-array input", () => {
  assert.throws(() => sum("nope"), TypeError);
});

test("isEven correctly detects even numbers", () => {
  assert.equal(isEven(2), true);
  assert.equal(isEven(7), false);
  assert.equal(isEven(0), true);
});

test("isEven rejects non-integers", () => {
  assert.throws(() => isEven(2.5), TypeError);
});

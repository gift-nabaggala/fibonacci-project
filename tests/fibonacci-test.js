import { describe, it } from "mocha";
import { assert } from "chai";
import { fib } from "./fibonacci.js";

describe("Fibonacci", function () {
  it("Base case", function () {
    let result = fib(0);
    assert.equal(result, "0");
  });

  it("Base case", function () {
    let result = fib(1);
    assert.equal(result, "1");
  });

  it("Should return 1 for n=2", function () {
    let result = fib(2);
    assert.equal(result, "1");
  });

  it("Should return 2 for n=3", function () {
    let result = fib(3);
    assert.equal(result, 2);
  });

  it("Should return 2 for n=3", function () {
    let result = fib(10);
    assert.equal(result, 55);
  });
  it("Should return 2 for n=3", function () {
    let result = fib(12);
    assert.equal(result, 144);
  });
});

const hello = require("./index.js");
describe("My Hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World!");
  });
});

"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-kkito-ts-generator:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ name: "testapp" });
  });

  it("creates files", () => {
    assert.file(["package.json", ".gitignore"]);
  });
});

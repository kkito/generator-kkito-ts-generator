import { TestIndex } from "../src/index";

test("getName", () => {
  const ti = new TestIndex();
  expect(ti.getName()).toBe("<%= name %>");
});

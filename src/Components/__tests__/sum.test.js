import { sum } from "../sum";

test("Calculate sum of two numbers", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});

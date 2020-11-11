import { calculateCompletionWidth } from "./calculateCompletionWidth";

describe("calculateCompletionWidth", () => {
  describe("when width 500 and percent 50 are passed", () => {
    it("should render 250", () => {
      expect(calculateCompletionWidth(500, 50)).toEqual(250);
    });
  });

  describe("when undefined width and undefined percent are passed", () => {
    it("should render 0", () => {
      expect(calculateCompletionWidth(undefined, undefined)).toEqual(0);
    });
  });
});

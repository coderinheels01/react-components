import { calculateCompletionColor } from "./calculateCompletionColor";

describe("calculateCompletionColor", () => {
  describe("when 100 percent is passed ", () => {
    it("should return #36a01d", () => {
      expect(calculateCompletionColor(100)).toEqual("#36a01d");
    });
  });

  describe("when 49 percent is passed ", () => {
    it("should return #e02d14", () => {
      expect(calculateCompletionColor(49)).toEqual("#e02d14");
    });
  });

  describe("when 51 percent is passed ", () => {
    it("should return #72e356", () => {
      expect(calculateCompletionColor(51)).toEqual("#72e356");
    });
  });

  describe("when undefined percent is passed ", () => {
    it("should return #e02d14", () => {
      expect(calculateCompletionColor(undefined)).toEqual("#e02d14");
    });
  });
});

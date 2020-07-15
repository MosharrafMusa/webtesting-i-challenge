const enhancer = require("./enhancer.js");
// test away!
describe("enhancers module", () => {
  describe("repair function", () => {
    it("repairs the item", () => {
      const expectedOutput = {
        name: "sword",
        durability: 100,
        enhancement: 10,
      };
      const actualOutput = enhancer.repair({
        name: "sword",
        durability: 9,
        enhancement: 10,
      });
      expect(actualOutput).toMatchObject(expectedOutput);
    });
  });
});

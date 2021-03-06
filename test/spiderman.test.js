const Spiderman = require("../app/spiderman");

describe("Test Suite Dummy Description", () => {
  test("Case 1 Dummy", () => {
    const resultOfSomething = 1 + 2;
    expect(resultOfSomething).toBe(3);
  });
});

describe("Unit test for spiderman class", () => {
  test("Create an spiderman Object ", () => {
    const AndrewGarfield = new Spiderman(
      "Spiderman Sony",
      31,
      "Andrew Garfield",
      2,
      "Sony"
    );
    expect(AndrewGarfield.name).toBe("Spiderman Sony");
    expect(AndrewGarfield.age).toBe(31);
    expect(AndrewGarfield.actor).toBe("Andrew Garfield");
    expect(AndrewGarfield.movies).toBe(2);
    expect(AndrewGarfield.studio).toBe("Sony");
  });

  test("Use Method GetInfo", () => {
    const tomHolland = new Spiderman(
      "Spiderman Marvel",
      25,
      "Tom Holland",
      5,
      "Marvel"
    );
    expect(tomHolland.getInfo()).toBe(
      "Hey, I'm Tom Holland from Marvel studio"
    );
  });
});

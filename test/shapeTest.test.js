const { Triangle, Circle, Square } = require("../lib/shape");

describe("Shape color", () => {
  it("It should return the triangle polygon containing the correct color", () => {
    const newTriangle = new Triangle("DMC", "yellow", "red");
    // const renderNewTriangleResult = newTriangle.render();
    const [shape, text] = newTriangle.render();
    expect(shape).toEqual(
      `<polygon points="150, 18 244, 182 56, 182" fill="red"/>`
    );
  });

  it("It should return the circle shape containing the correct color", () => {
    const newCircle = new Circle("YMA", "black", "green");
    //const renderNewTriangleResult = newTriangle.render();
    const [shape, text] = newCircle.render();
    expect(shape).toEqual(
      `<circle cx="50" cy="50" r="40"  stroke-width="3" fill="green"/>`
    );
  });

  it("It should return the square shape containing the correct color", () => {
    const newSquare = new Square("YMA", "black", "green");
    //const renderNewTriangleResult = newTriangle.render();
    const [shape, text] = newSquare.render();
    expect(shape).toEqual(
      `<rect width="200" height="200" style="fill:green"/>`
    );
  });
});

describe("Logo Text", () => {
  it("It should return the correct characters and color for the text in our Triangle logo", () => {
    const newTriangle = new Triangle("SDX", "yellow", "blue");
    const [shape, text] = newTriangle.render();
    expect(text).toEqual(
      `<text x="150" y="120" font-size="40" text-anchor="middle" fill="yellow">SDX</text>`
    );
  });

  it("It should return the correct characters and color for the text in our Circle logo", () => {
    const newCircle = new Circle("LAJ", "black", "blue");
    const [shape, text] = newCircle.render();
    expect(text).toEqual(
      `<text x="50" y="60" font-size="30" text-anchor="middle" fill="black">LAJ</text>`
    );
  });

  it("It should return the correct characters and color for the text in our Square logo", () => {
    const newSquare = new Square("DAZ", "red", "blue");
    const [shape, text] = newSquare.render();
    expect(text).toEqual(
      `<text x="100" y="100" font-size="30" text-anchor="middle" fill="red">DAZ</text>`
    );
  });
});

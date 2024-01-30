const SVG = require("./svg");
const { Square } = require("./shapes");

describe("SVG", () => {
  it("should render a 300 x 200 svg element", () => {
    const square = new Square();
    square.setColor("dodgerblue");
    square.setText("A", "#333");

    const svgString = SVG.render(square);

    expect(svgString).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">A</text></svg>');
  });

  it("should throw if text exceeds 3 characters", () => {
    const square = new Square();
    square.setColor("dodgerblue");

    expect(() => square.setText("ABCD", "#333")).toThrowError("Text must be up to three characters.");
  });
});

const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {
    const userData = await inquirer.prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the text:",
        validate: (input) => (input.length <= 3 ? true : "Text must be up to three characters"),
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter a color for the text (keyword or hexadecimal):",
      },
      {
        type: "list",
        name: "shapeType",
        message: "Select a shape:",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for the shape (keyword or hexadecimal):",
      },
    ]);

    let shape;
    switch (userData.shapeType) {
      case "circle":
        shape = new Circle();
        break;
      case "triangle":
        shape = new Triangle();
        break;
      case "square":
        shape = new Square();
        break;
      default:
        throw new Error("Invalid shape type");
    }

    shape.setColor(userData.shapeColor);
    shape.setText(userData.text, userData.textColor);

    console.log("Shape Object:", shape);
    
    const svgString = SVG.render(shape);


    await writeFile("logo.svg", svgString);

    console.log("Generated logo.svg");
  }
}

module.exports = CLI;

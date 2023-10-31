const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
  async run() {
    // Use inquirer to get user input
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

  
  }
}

module.exports = CLI;

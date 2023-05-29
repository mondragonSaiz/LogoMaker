const inquirer = require("inquirer");
// const Triangle = require("./lib/triangle");
// const Circle = require("./lib/circle");
// const Square = require("./lib/square");
const { Triangle, Circle, Square } = require("./lib/shape");
// const fs = require("fs");
// const triangle = `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`;
// const circleContent = `<svg version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   ${triangle}

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text>

// </svg>`;
const questions = [
  {
    type: "input",
    name: "initials",
    message: "What are the initials for your logo?",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "What will be the color for the text of your logo? (color name or hexadecimal #)",
  },
  {
    type: "list",
    name: "shape",
    message: "What shape you would like for your logo?",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "What color you would like for  the shape of your logo?(color name or hexadecimal #)",
  },
];

const startProgram = function () {
  inquirer
    .prompt(questions)
    .then((answers) => {
      createLogo(answers);
    })
    .catch((err) => {
      console.error("ERROR", err);
    });
};

let createLogo = function (answ) {
  //console.info("ANSWERS", answ);
  if (
    answ.initials.length > 3 ||
    answ.initials === null ||
    answ.initials === "" ||
    answ.textColor === null ||
    answ.textColor === "" ||
    answ.shapeColor === null ||
    answ.shapeColor === ""
  ) {
    // console.error(
    //   "Invalid input, your logo can only contain 3 charaters and cannot be an empty string, plese try again."
    // );
    throw new Error("Invalid Input!");
    //return;
  } else {
    switch (answ.shape) {
      case "Circle":
        const newCircle = new Circle(
          answ.initials,
          answ.textColor,
          answ.shapeColor
        );

        newCircle.render();
        console.log("Generated circleLogo.svg");
        break;
      case "Triangle":
        const newTriangle = new Triangle(
          answ.initials,
          answ.textColor,
          answ.shapeColor
        );

        newTriangle.render();
        console.log("Generated triangleLogo.svg");
        break;
      case "Square":
        const newSquare = new Square(
          answ.initials,
          answ.textColor,
          answ.shapeColor
        );

        newSquare.render();
        console.log("Generated squareLogo.svg");
        break;
    }
  }
};

// fs.writeFile("./demo1.svg", circleContent, (err) => {
//   console.err("ERROR", err);
// });
try {
  startProgram();
} catch (e) {
  console.log(e);
}

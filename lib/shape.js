const fs = require("fs");

class Shape {
  constructor(initials, textColor, shapeColor) {
    this.initials = initials;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

Shape.prototype.render = function () {};

class Triangle extends Shape {
  constructor(initials, textColor, shapeColor) {
    super(initials, textColor, shapeColor);
  }

  render() {
    const triangle = `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
    const text = `<text x="150" y="120" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>`;
    const triangleContent = `<svg 
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

    ${triangle}
    ${text}
</svg>`;

    fs.writeFile("./public/triangleLogo.svg", triangleContent, (err) => {
      console.error("ERROR", err);
    });

    return [triangle, text];
  }
}

class Circle extends Shape {
  constructor(initials, textColor, shapeColor) {
    super(initials, textColor, shapeColor);
  }

  render() {
    const circle = `<circle cx="50" cy="50" r="40"  stroke-width="3" fill="${this.shapeColor}"/>`;
    const text = `<text x="50" y="60" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>`;
    const triangleContent = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

      ${circle}
      ${text}
</svg>`;

    fs.writeFile("./public/circleLogo.svg", triangleContent, (err) => {
      console.error("ERROR", err);
    });

    return [circle, text];
  }
}

class Square extends Shape {
  constructor(initials, textColor, shapeColor) {
    super(initials, textColor, shapeColor);
  }

  render() {
    const square = `<rect width="200" height="200" style="fill:${this.shapeColor}"/>`;
    const text = `<text x="100" y="100" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.initials}</text>`;
    const triangleContent = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     ${square}
     ${text}
     </svg>`;

    fs.writeFile("./public/squareLogo.svg", triangleContent, (err) => {
      //console.error("ERROR", err || "");
    });
    console.info(square);
    console.info(text);
    return [square, text];
  }
}

module.exports = { Triangle, Circle, Square };

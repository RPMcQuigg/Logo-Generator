class Shape {
  constructor() {
    this.text = "";
    this.textColor = "";
    this.shapeColor = "";
  }

  setColor(color) {
    this.shapeColor = color;
  }

  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  getProperties() {
    return {
      text: this.text,
      textColor: this.textColor,
      shapeColor: this.shapeColor,
    };
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`;
  }
}

module.exports = { Circle, Triangle, Square };

class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `Heloo My name is ${this.name}!`;
  }
}

module.exports = {
  Person,
};

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  values: [],

  getLength() {
    return this.values.length;
  },

  addLink(value = '') {
    this.values.push(value);

    return this;
  },

  removeLink(position) {
    if (!Number.isInteger(position) || this.values[position - 1] === undefined) {
      this.values = [];
      throw Error("You can't remove incorrect link!");
    }

    this.values.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.values.reverse();

    return this;
  },

  finishChain() {
    let stringOutput = '';

    this.values.forEach((value, index) => {
      stringOutput += `( ${value} )`;

      if (index !== this.values.length - 1) {
        stringOutput += '~~';
      }
    });

    this.values = [];

    return stringOutput;
  }
};

module.exports = {
  chainMaker
};

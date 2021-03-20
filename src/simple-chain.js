const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.reduce((prev, curr) => `${prev}~~( ${curr} )`, '').substring(2);
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;

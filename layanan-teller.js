'use strict'
let Queue = require('./queue');

class LayananTeller {
  constructor() {
    //your code here
    this.noAntrian = 0;
    this.arrNoAntri = [];

  }

  getLine() {
    this.noAntrian++;
    this.arrNoAntri.push(this.noAntrian);

  }
}

// let antri = new Index();
module.exports = LayananTeller;

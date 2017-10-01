'use strict'
let Queue = require('./queue');

class LayananCustomerService {
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

// let queue = new Queue();
// let cs = new LayananCustomerService();
// let antri = new Index();
module.exports = LayananCustomerService;

'use strict'
let Index = require('./index.js');
// let antri = new Index();
// let fs = require('fs');
// let content = fs.readFileSync('./bonus.json', 'utf8');

class Queue {
  constructor() {
    this._antrian = [];
    this._nomorAntrian = this._antrian.length;
  }

  addQueue() {
    //your code here
    // this._antrian.push(index);
    Index.readFile();
    let dataCS = this.data[1].queues.length + 1;
    this.data[1].queues.push(dataCS);
    Index.writeFile();
    console.log(`Anda mendapat nomor antrian CS-${this.data[1].queues.length} silakan menunggu untuk dilayani CS Kami`);
  }

  popQueue() {
    //your code here
    this._antrian.queues.splice(0, 1);

  }
}

let queue = new Queue();
module.exports = Queue;

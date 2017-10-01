'use strict'
let fs = require('fs');
let LayananCustomerService = require('./layanan-customer-service.js');
let LayananTeller = require('./layanan-teller.js');
let Queue = require('./queue.js');

class Index {
  constructor() {
    this.data = [];//your code here
    this._cs = new LayananCustomerService();
    this._teller = new LayananTeller();
  }

  readFile() {
    //your code here
    let content = fs.readFileSync('bonus.json', 'utf8');
    this.data = JSON.parse(content);

  }

  writeFile() {
    //your code here
    let simpan = JSON.stringify(this.data, null, '\t');
    fs.writeFile('bonus.json', simpan, (err, save) => {
      if (err) {
        console.log('data tak tersimpan');
      } else {
        console.log('sistem kami sudah mencatat permintaan anda');
      }
    });
  }

  choose(menuNo) {
    //your code here
    if (menuNo == '') {
      console.log('input index.js help');
    } else if (menuNo == 'help') {
      console.log('MENU:');
      console.log('1. Ambil antrian Customer Service: node index.js 1');
      console.log('2. Ambil antrian Teller: node index.js 2');
      console.log('3. Panggil antrian Customer Service: node index.js 3');
      console.log('4. Panggil antrian Teller: node index.js 4');
    } else if (menuNo == '1') {
      this.readFile();
      let dataCS = this.data[1].queues.length + 1;
      this.data[1].queues.push(dataCS);
      this.writeFile();
      console.log(`Anda mendapat nomor antrian CS-${this.data[1].queues.length} silakan menunggu untuk dilayani CS Kami`);
    } else if (menuNo == '2') {
      this.readFile();
      let dataTL = this.data[0].queues.length + 1;
      this.data[0].queues.push(dataTL);
      this.writeFile();
      console.log(`Anda mendapat nomor antrian TL-${this.data[0].queues.length} silakan menunggu untuk dilayani Teller Kami`);
    } else if (menuNo == '3') {
      this.readFile();
      if (this.data[1].queues.length !== 0)
      console.log(`Nomor antrian CS-${this.data[1].queues.splice(0, 1)} silakan menuju ke Customer Service`);
      else {
        console.log('Antrian Kosong');
      }

      this.writeFile();
    } else if (menuNo == '4') {
      this.readFile();
      if (this.data[0].queues.length !== 0)
      console.log(`Nomor antrian TL-${this.data[0].queues.splice(0, 1)} silakan menuju ke Teller`);
      else {
        console.log('Antrian Kosong');
      }

      this.writeFile();
    }
  }

}
let antri = new Index();
let queue = new Queue();

// let cs = new LayananCustomerService();
// let teller = new LayananTeller();

let menuNo = process.argv.slice(2);

antri.choose(menuNo);

// antri.readFile()

module.exports = Index;

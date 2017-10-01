# Sistem Antrian Bank

Kamu diminta untuk membuat aplikasi sistem antrian sederhana pada sebuah bank untuk antrian Layanan customer service dan teller.

Kamu diminta untuk menentukan relasi dari class-class tersebut, apakah relasi-nya merupakan parent-child (inheritance) atau composition

## Kompetensi
- Interaksi antar class
- Inheritance
- Composition
- baca/tulis file
- parsing data json
- MVC (Optional, Bonus Point)

## Releases

### Release 0: Implement the help command
Buat code untuk menampilkan semua command yang dapat dijalankan ketika menjalankan perintah:
<br>$ node index.js help

outputnya menampilkan:

<br>$ MENU:
<br>$ 1. Ambil antrian Customer Service: node index.js 1
<br>$ 2. Ambil antrian Teller: node index.js 2
<br>$ 3. Panggil antrian Customer Service: node index.js 3
<br>$ 4. Panggil antrian Teller: node index.js 4

### Release 1: Implement tambah antrian di Customer Service
Buatlah code untuk menambah nomor antrian pada customer service dan simpan nomor antrian tersebut pada file antrian.json sesuai dengan type layanan yang dipilih

example-1:
$ node index.js 1

output:
Nomor antrian anda adalah CS-1

example-2:
$ node index.js 2

output:
Nomor antrian anda adalah TL-4


NOTE:
- contoh file json SEBELUM memilih menu "Ambil Antrian CS":
  - [{"division":"teller","queues":[]},{"division":"customer-service","queues":[]}]

- contoh file json SETELAH memilih menu "Ambil Antrian CS"
  - [{"division":"teller","queues":[]},{"division":"customer-service","queues":[1]}]

*********************************************************************************

- contoh file json SEBELUM memilih menu "Ambil Antrian TELLER":
  - [{"division":"teller","queues":[2,3]},{"division":"customer-service","queues":[1]}]

- contoh file json SETELAH memilih menu "Ambil Antrian TELLER"
  - [{"division":"teller","queues":[2,3,4]},{"division":"customer-service","queues":[1]}]


### Release 2: Implement "Panggil Antrian" pada Customer Service
Buatlah code untuk memanggil nomor antrian yang terdapat pada file antrian.json untuk tipe layanan Customer Service.
Jangan lupa menghapus nomor antrian yang sudah dipanggil pada file "antrian.json"

example-1 (ada antrian):
$ node index.js 3

output:
Nomor antrian CS-3 silakan menuju ke Customer Service

example-2 (tidak ada antrian):
$ node index.js 3

output:
Antrian kosong

NOTE:
- contoh file json SEBELUM memilih menu "Panggil Antrian CS":
  - [{"division":"teller","queues":[]},{"division":"customer-service","queues":[3,4,5]}]

- contoh file json SETELAH memilih menu "Panggil Antrian CS"
  - [{"division":"teller","queues":[]},{"division":"customer-service","queues":[4,5]}]


### Release 3: Implement (tambah dan panggil) antrian di Teller
Buatlah code untuk kasus antrian di Teller


### Release 4 (Bonus)
Seiring bertambahnya customer pada Bank maka semakin banyak pula customer yang meng-antri untuk mendapatkan layanan CS maupun teller. Maka dari itu, pihak Bank ingin mengembangkan sistem antriannya.

Masing-masing layanan akan memiliki lebih dari 1 pegawai (Pegawai Customer Service dan Teller).

#### v 4.1
Buatlah Class pegawai yang dibutuhkan dan tentukan relasi (inheritance/composition) antar class jika ada.

Setiap jenis pegawai memiliki attribute/property:
 - name
 - level
 - isEmpty

#### v 4.2
Refactor-lah class LayananCustomerService, LayananTeller dan Queue sesuai dengan requirement(sesuaikan dengan struktur data pada file bonus.json):

- Jika menu "Panggil antrian" untuk masing-masing layanan dipilih, cek terlebih dahulu apakah ada pegawai CS/Teller yang kosong

- Jika ada, maka panggil nomor antrian tersebut dan arahkan ke pegawai CS/Teller yang kosong
  - value status isEmpty pegawai CS/Teller yang terpilih diubah menjadi false

- Jika tidak ada, maka tulis pesan "Semua layanan CS kami sedang sibuk. Tunggulah beberapa saat lagi"


#NOTE:
UNTUK RELEASE 4 (BONUS) tidak perlu sempurna seperti sistem antrian pada umumnya.
Untuk sementara value status isEmpty pegawai jika ingin dijadikan true dilakukan secara manual

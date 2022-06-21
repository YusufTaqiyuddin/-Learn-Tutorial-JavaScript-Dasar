document.writeln("<h2>Hello World</h2>")

//komentar satu baris

//komentar beberapa baris
/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi qui dolorem nulla praesentium, corporis minima explicabo suscipit corrupti eius consequatur, ducimus tempora animi harum dolorum tempore est vero delectus. Tenetur maiores labore excepturi incidunt, laudantium mollitia blanditiis asperiores perferendis necessitatibus iure sit provident quos, nam tempora error minus placeat deleniti deserunt? Ratione, sint quasi! Accusantium molestias autem consequatur porro placeat optio inventore expedita provident, eius cumque praesentium assumenda, modi veniam blanditiis nobis facilis sint excepturi quod eos? Maiores id magni aliquid necessitatibus minus delectus recusandae quibusdam porro nobis ipsum itaque ipsam reiciendis, aspernatur molestiae eaque quis. Quas doloremque eius aliquam.*/

//tipe data number
document.writeln(100 + "<br>" + 99.90 + "<br>")

//number anotation binary
document.writeln(0b1111010 + "<br>")

//tipe data boolean
document.writeln(true + "<br>")

//tipe data boolean false
document.writeln(false + "<br>")

//tipe data string
document.writeln("Ini adalah tipe data string <br>")

//menggabungkan string dengan menambahkan +
document.writeln("Yusuf " + "Taqiyuddin <br>")

//escape sequence
document.writeln("<textarea cols='10' rows='10'>")
document.writeln("Yusuf \nTaqiyuddin")
document.writeln("\\home\\Yusuf")
document.writeln("\"Programmer Zaman Now\"")
document.writeln("\'Belajar JavaScript\'")
document.writeln("</textarea><br>")

//variable var
var fullName = "Yusuf Taqiyuddin<br>"
document.writeln(fullName)

//variable let
let namaLengkap = "Yusuf Taqiyuddin";
namaLengkap = "Ucup Udin<br>"
document.writeln(namaLengkap)

//variable const
const nama = "Yusuf Yusuf<br>"
// nama = "Taqiyuddin Yusuf" error
document.writeln(nama)

//operator aritmatika
let penjumlahan = 2 + 5
document.writeln(penjumlahan + "<br>")

//operator augmented assigments
let hasil = penjumlahan += 10
document.writeln(hasil + "<br>");

//operator unary
let unary = 4
unary ++
document.writeln(unary + "<br>")

//operator perbandingan
let perbandingan1 = 5 != 5
let perbandingan2 = 4 == "4"
document.writeln(perbandingan1 + "<br>")
document.writeln(perbandingan2 + "<br>");

//operator logika
const nilaiUjianA = 70
const nilaiUjianB = 80

const lulusUjianA = nilaiUjianA > 75
const lulusUjianB = nilaiUjianB > 75

const lulus = lulusUjianA && lulusUjianB
document.writeln("lulus : " + lulus + "<br>")

//console
console.info("Console Info")
console.warn("Console Warn")
console.error("Console Error")

//string template
let namaGw = "yusuf t"
document.writeln(`Nama saya : ${namaGw} <br>`)

//expression string template
const aman = "Yusuf Taqiyuddin"
const nilai = 80

const template = `Nama : ${aman}, Lulus : ${nilai > 75}`
console.info(template)

//multiline string
let multiline = `Nama saya Yusuf,
mahasiswa dari Polines,
Sekarang semester 4,
hobi rebahan`

document.writeln("<pre>")
document.writeln(multiline)
document.writeln("</pre>");

//konversi String dan Number
const value1 = parseInt("2")
const value2 = 4
const jumlah = value1 + value2

document.writeln(`Hasil : ${jumlah} <br>`)

//NaN
document.writeln(`${parseInt("salah")} <br>`)

//isNaN
const cobak = Number("salah") //NaN
document.writeln(`${isNaN(cobak)}`)
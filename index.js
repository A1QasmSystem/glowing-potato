function dataHandling2(input){
      
    var dataArray = input

dataArray.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")

var hasilSplit = dataArray[3].split('/')

var tanggal = 0
var bulan = 'tidak di ketahui'
var bulan2 =  'tidak di ketahui'
var tahun = 0

//tanggal
//['21',]
for(var i =1;i<= 31;i++){
switch(true){
    case hasilSplit[0] == i:
        tanggal = i
        break;

    default:
        tanggal
        break;
}
}
//bulan dalam bentuk nama

switch(true){
case hasilSplit[1] == 01 :
bulan ='januari'
break;

case hasilSplit[1] == 02:
    bulan = 'febuari'
    break;

case hasilSplit[1] == 3:
    bulan = 'maret'
    break;

case hasilSplit[1] == 4:
    bulan ='april'
    break;

case hasilSplit[1] == 5:
    bulan ='mei'
    break;

case hasilSplit[1] == 6:
    bulan ='juni'
    break;

case hasilSplit[1] == 7:
    bulan ='juli'
    break;

case hasilSplit[1] == 8:
    bulan ='agustus'
    break;

case hasilSplit[1] == 9:
    bulan ='september'
    break;
case hasilSplit[1] == 10:
    bulan ='oktober'
    break;

case hasilSplit[1] == 11:
    bulan ='november'
    break;

case hasilSplit[1] == 12:
    bulan ='desember'
    break;   

default:
    bulan
    break;
}

//bulan dalam bentuk angka

for(i = 1;i <= 12;i++){

switch(true) {
    case hasilSplit[1] == i:
        bulan2 ='0' + i
        break;

    default:
        bulan2
        break;
}
};

//tahun

for(i = 1;i <= new Date().getFullYear();i++){

switch(true){
    case hasilSplit[2] == i:
        tahun = i
        break;

    default:
    tahun
    break

}
};

var hasilBalik = hasilSplit.sort(function(a,b) {return b -a})

var hasilGabung = tanggal + '-' + bulan2 + '-' + tahun

var hasilConvert = dataArray[1].toString()

var  hasilSlice = hasilConvert.slice(0,14)

console.log(dataArray);

console.log(bulan);

console.log(hasilBalik);

console.log(hasilGabung);

console.log(hasilSlice);



}

let data = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

dataHandling2(data)
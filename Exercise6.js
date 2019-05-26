console.log("========================================");
console.log("1. Melakukan Looping Menggunakan While")
console.log("========================================");
var i = 2;

console.log('LOOPING PERTAMA');
while(i <= 20) {
    console.log(i + ' - I love coding');
    i+=2;
}

i = 20;
console.log('LOOPING KEDUA');
while(i > 0) {
    console.log(i + ' - I will become fullstack developer');
    i-=2;
}

console.log("========================================");
console.log("2. Melakukan Looping Menggunakan For");
console.log("========================================");

console.log('LOOPING PERTAMA');
for( var i = 1; i <=20; i++) {
    console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(i = 20; i >= 1; i--) {
    console.log(i + ' - I will become fullstack developer');
}

console.log("========================================");
console.log("3. Angka Ganjil dan Genap");
console.log("========================================");

for(i = 1; i <= 100; i++) {
  console.log('counter sekarang = ' + i);
  if(i % 2 == 0) {
    console.log('GENAP');
  } else {
    console.log('GANJIL');
  }
}

console.log("**********");

for(i = 1; i <= 100; i += 2) {
  console.log('counter sekarang = ' + i);
  if(i % 3 == 0) {
      console.log(i + ' KELIPATAN 3');
  } else {
      console.log('');
  }        
}

console.log("**********");

for(i = 1; i <= 100; i += 5) {
  console.log('counter sekarang = ' + i);
  if(i % 6 == 0) {
      console.log(i + ' KELIPATAN 6');
  } else {
      console.log('');
  }        
}

console.log("**********");

for(i = 1; i <= 100; i += 9) {
  console.log('counter sekarang = ' + i);
  if(i % 10 == 0) {
      console.log(i + ' KELIPATAN 10');
  } else {
      console.log('');
  }        
}
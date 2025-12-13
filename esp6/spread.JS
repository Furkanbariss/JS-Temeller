let myNumber = [10, 20, 30, 40];
function sum(a, b, c, d) {
  console.log(a + b + c + d);
}

sum(...myNumber);

//buradaki bu 3 noktaya deniyor. dizideki tüm elemanları sırayla gönderir.

console.log(...myNumber);

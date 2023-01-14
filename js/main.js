// 11.// a soni berilgan.

// a sonini 5 chi darajasini hisoblab konsolga chiqaring
var a = 2;
var b = 1;

function fifthDegree() {
  for (let i = 0; i < 5; i++) {
    b = b * a;
  }
  console.log(b);
}

fifthDegree(a);

// 12.// a soni berilgan.

// a sonini n chi darajasini hisoblaydigan dastur yozing
//  va hosil bo'lgan sonni konsolga chiqaring.

var a = 2;
var n = 6;

function fifthDegree() {
  for (let i = 0; i < n; i++) {
    n = n * n;
  }
  console.log(n);
}

fifthDegree(a);

// 13.//a , n sonlari berilgan (a soni 1-9 o'rtasida ).
// Ketma ketlikni hisoblang. a + aa + aaa + ........  nta a bo'ladi.
// Yig'indini konsolga chiqarish kerak.
var a = 7,
  n = 5;

var temp = 0,
  sum = 0;

function sequence() {
  for (let i = 0; i < n; i++) {
    temp = temp * 10 + a;
    sum = sum + temp;
  }
  console.log(sum);
}

sequence(a);

// 14.//a soni berilgan.
//  Shu son mukammal raqam yoki yo'qmi shuni aniqlang.
//  Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring.
// Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi.
// Deylik
//  a = 6, uning bo'linuvchilari 1,2,3
//  6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi.
//  a = 15, uning bo'linuvchilari 1,3,5,
//  1 + 3 + 5 = 8    bo'linuvchilari yig'indisi 8ga teng 15 ga emas. Shuning uchun bu mukammal son emas.
var a = 12;
var sum = 0;

function perfectNamber() {
  for (let i = 1; i < a; i++) {
    if (a % sum == 0) {
      sum = sum + i;
    }
  }
  if (a === sum) {
    console.log(true);
  } else {
    console.log(false);
  }
}

perfectNamber(a);

// 15.//  n  soni berilgan.
// Ketma ketlikni  berilgan   1 + 4 + 9 + 16 +  ... + n*n . Shu ketma ketlikning yig'indisini
//  hisoblang  va  natijani konsolga chiqaring.
// Masalan n = 6
// Bunda  1 dan 6 gacha bo'lgan sonlarning kvadrati yig'indisini xisoblash kerak.
// Ya'ni  1 + 4 + 9 + 16 + 25  + 36 = 91
// To'liq  aytadigan bo'lsam:  1*1 + 2*2 + 3*3 +  4*4 + 5*5 + 6*6
//    buni  boshqacha qilib yozadigan bo'lsak 1 + 4 + 9 + 16 + 25 + 36
//     va bularning yig'indisi  91  bo'ladi va 91 ni konsolga chiqarish kerak.
var n = 6;
var sum = 0;

function theSquareOfTheSequence() {
  for (let i = 1; i <= n; i++) {
    sum = sum + i * i;
  }

  console.log(sum);
}

theSquareOfTheSequence(n);

// 16.//

var n = 100;
var temp = n;
var sum = 0;
var m;
var numberLenght = 0;

function armstrong() {
  for (; temp != 0; temp = temp / 10) {
    m = temp % 10;
    if (m > 0) {
      numberLenght++;
    }
  }

  var pow = 1;

  for (let j = 0; j < numberLenght; j++) {
    pow = pow * m;
  }

  sum = sum + pow;

  if (sum == n) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// 17.//
var n = 7;
var count = 0;

function primeNumber() {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }

  if (count == 2) {
    console.log(true);
  } else {
    console.log(false);
  }
}

primeNumber(n);

// 18.//
var n = 121;
var count = 0;

function howManyDigitsIsNumber() {
  for (let i = n; i != 0; i = i / 10) {
    count++;
  }

  console.log(count);
}

howManyDigitsIsNumber(n);

// 19.//

var n = 35;
var sum = 0;

function sumOfNumbers() {
  for (let i = n; i != 0; i = i / 10) {
    sum = sum + (i % 10);
  }
  console.log(sum);
}

sumOfNumbers(n);

// 20.//

var n = 12345;
var temp;
var reverseNum = 0;

function reverseNumber() {
  for (; n != 0; ) {
    temp = n % 10;
    reverseNum = reverseNum * 10 + temp;

    n = n / 10;
  }
  console.log(reverseNum);
}

reverseNumber(n);

// 21.//
var n = 12321;
var temp;
var reverseNum = 0;

function inverseNumber() {
  for (; n != 0; ) {
    temp = n % 10;
    reverseNum = reverseNum * 10 + temp;

    n = n / 10;
  }

  if (n == reverseNum) {
    console.log(true);
  } else {
    console.log(false);
  }
}

inverseNumber(n);

// 22.//

var n = 5;
var factorial = 1;

function factorial() {
  for (let i = 1; i < n; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
}

factorial(n);

// 23.//
var n = 15;
var sum = 0;
var f1 = 0,
  f2 = 1;

function fibanat() {
  for (let i = 2; i < n; i++) {
    sum = sum + f_1 + f_2;

    var tem = f_1;

    f_1 = f_2;
    f_2 = f_2 + tem;
  }
  console.log(sum);
}

fibanat(n);

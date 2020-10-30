let globalString1 = 'я вчу javascript!';
let globalArr1 = ['1', '2', '3'];
let globalArr2 = ['4', '5', '6'];
let globalArr3 = ['1', '2', '3', '4', '5'];

// 1
function point1() {
  let string1 = 'js';
  let string2 = 'JS';

  let string1_Done = string1.toLocaleUpperCase();
  let string2_Done = string2.toLocaleLowerCase();

  console.log('--------------------------Строки--------------------------');

  console.log('1. Робота з регістром символів');
  console.log(`a) ${string1_Done} - було ${string1}`);
  console.log(`b) ${string2_Done} - було ${string2}`);
}

point1();

// 2
function point2() {
  let exA = globalString1.length;
  let exB1 = globalString1.substr(2, 3);
  let exB2 = globalString1.substring(2, 5);
  let exB3 = globalString1.slice(2, 5);
  let exC = globalString1.indexOf('вчу');

  let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo iste suscipit, error debitis beatae tenetur';
  let result;
  let n = 15;

  if (str.length > n) {
    result = str.slice(0, n) + '...';
  } else {
    result = str;
  }

  console.log('2) Робота з length, substr, substring, slice. Робота з indexOf');
  console.log(`a) ${exA} - (length).`);
  console.log(`b) 1. ${exB1} - substr(2, 3); 2. ${exB2} - substring(2, 5); 3. ${exB3} - slice(2, 5).`);
  console.log(`c) [${exC}] - indexOf('вчу').`);
  console.log(`d) ${result}`);
}

point2();

// 3
function point3() {
  let date = '2025-12-31';

  let exA = globalString1.split(' ');
  let exB = globalString1.split('');
  let exC = date.split('-').reverse().join('.');

  console.log('3) Робота з split');
  console.log(`a) ${exA} - split(' ')`);
  console.log(`b) ${exB} - split('')`);
  console.log(`c) ${exC} - split('-').reverse().join('.')`);
}

point3();

// 4
function point4() {
  let arr = ['я', 'вчу', 'javascript', '!'];
  let exA = arr.join(" + ");

  console.log('--------------------------Масиви--------------------------');

  console.log('?) Робота з join');
  console.log(`a) ${exA} - join(" + ").`);
}

point4();

// 5
function point5() {
  let exA = globalArr1.concat(globalArr2);
  console.log('1) Робота з concat');
  console.log(`a) ${exA} - concat()`);
}

point5();

// 6
function point6() {
  let exA = globalArr1.reverse();

  console.log('2) Робота з reverse');
  console.log(`a) ${exA} - reverse()`);
}

point6();

// 7
function point7() {

  globalArr1 = ['1', '2', '3'];
  console.log('3) Робота з push, unshift');
  globalArr1.push(globalArr2);
  console.log(`a) ${globalArr1} - push()`);

  globalArr1 = ['1', '2', '3'];
  globalArr1.unshift(globalArr2);
  console.log(`b) ${globalArr1} - unshift()`);
}

point7();

// 8
function point8() {
  let arr = ['js', 'css', 'jq'];
  let exA = arr.shift();
  let exB = arr.pop();

  console.log('4) Робота з shift, pop');
  console.log(`a) ${exA} - shift()`);
  console.log(`b) ${exB} - pop()`);
}

point8();

// 9
function point9() {
  let exA = globalArr3.slice(0, 3);
  let exB = globalArr3.slice(3, 5);

  console.log('5) Робота з slice');
  console.log(`a) ${exA} - slice(0, 3)`);
  console.log(`b) ${exB} - slice(3, 5)`);
}

point9();

// 10
function point10() {
  console.log('6) Робота з splice');

  globalArr3 = ['1', '2', '3', '4', '5'];
  let exA = globalArr3.splice(1, 2);
  console.log(`a) ${globalArr3} - splice(1, 2)`);

  globalArr3 = ['1', '2', '3', '4', '5'];
  let exB = globalArr3.splice(1, 3);
  console.log(`b) ${exB} - splice(1, 3)`);

  globalArr3 = ['1', '2', '3', '4', '5'];
  globalArr3.splice(3, 0, 'a', 'b', 'c');
  console.log(`c) ${globalArr3} - splice(3, 0, 'a', 'b', 'c')`);

  globalArr3 = ['1', '2', '3', '4', '5'];
  globalArr3.splice(1, 0, 'a', 'b');
  globalArr3.splice(6, 0, 'c');
  globalArr3.splice(8, 0, 'e');
  console.log(`d) ${globalArr3}`);
}

point10();

function point11() {
  console.log('7) Робота з sort');
  let arr1 =  [3, 4, 1, 2, 7];
  arr1.sort();
  console.log(`a) ${arr1} - sort()`);

  arr1 =  [3, 4, 1, 2, 7];
  arr1.sort().reverse();
  console.log(`b) ${arr1} - sort().reverse()`);
  
  console.log('Або:')
  arr1 =  [3, 4, 1, 2, 7];
  arr1.sort((a, b) => {
    return b - a;
  });
  console.log(`b*) ${arr1} - sort(function...)`);
}

point11();
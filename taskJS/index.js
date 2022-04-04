//1. Напиши функцию создания генератора sequence(start, step).
// Она при вызове возвращает другую функцию - генератор,
// которая при каждом вызове дает число на 1 больше,и так до бесконечности.
// Начальное число, с которого начинать отсчет, и шаг,
// задается при создании генератора.
// Шаг можно не указывать, тогда он будет равен одному.
// Начальное значение по умолчанию равно 0.
// Генераторов можно создать сколько угодно.

function sequence(start = 0, step = 1) {
  let call=start;
  return function () {
    let returnValue = call;
    call += step;
    return returnValue;
 }
}

// 2.Также, нужна функция take(fn, count)
// которая вызвает функцию fn заданное число(count)
// раз и возвращает массив с результатами вызовов.
// Она нам пригодится для отладки:
// var gen2 = sequence(0, 2);
// console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

function take(fn, count) {
  let arr = [];
  for (i=0; i<count; i++) {
  arr[i] = fn();
 }
 return arr;
}

// 3.Напиши функцию map(fn, array),
// которая принимает на вход функцию и массив,
// и обрабатывает каждый элемент
// массива этой функцией, возвращая новый массив.Пример:

// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []
// Обрати внимание: функция не должна изменять переданный ей массив:

// var arr = [1, 2, 3];
// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]

function map(fn, array) {
  let newArr = [];
  for (let i=0; i<array.length; i++) {
     newArr[i] = fn(array[i]);
 }
  return newArr;
}

// 7. Напиши функцию bind, которая позволяет привязать
// контекст(значение this) к функции:

// window.x = 1;
// var ctx = { x: 2 };

// function testThis(a) { console.log("x=" + this.x + ", a=" + a); }
// console.log(testThis(100)); // x=1, a=100
// var boundFunction = bind(testThis, ctx);
// console.log(boundFunction(100)); // x=2, a= 100;
  
function bind(fn, context) {
  return fn.bind(context);
}

// 8.Напиши функцию pluck, которая берет массив объектов и возвращает массив значений определенного поля:
function pluck(objects, fieldName) {
  return objects.map(el=>el[fieldName]);
}

// 9.Напиши функцию filter(), которая принимает функцию - предикат и массив.
// Возвращает она массив значений, для которых предикат вернет true.
function filter (arr, fn) {
  let newArr= [];
  for (let i=0; i < arr.length; i++){
   if(fn(arr[i])) {
   newArr.push(arr[i])
  }
 }
  return newArr;
}
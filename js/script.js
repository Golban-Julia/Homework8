"use strict";

// 1. Переписать функцию sumTwoSmallestNumbers(из практического занятия).
//  Данная функция должна принимать неограниченное кол - во аргументов и возвращать сумму двух наименьших чисел для заданного массива.
// Если передано меньше 2х аргументов - то должна вывестись ошибка (в консоль) и функция не должна продолжать выполнение

function sumTwoSmallestNumbers(...args) {
    if (args.length < 2) {
      console.error("...");
    } else {
      let newArray = (args.sort((a, b) => a - b));
    return newArray[0] + newArray[1];
    };
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3


// 2. Написать функцию createCalculator, чтобы ее можно было использовать таким образом:
// // Подсказка 1: функция может возвращать любой тип данных
// // Подсказка 2: в значении ключа объекта может быть функция (как мы разбирали в примере с функция calc)

// function createCalculator(defaultValue) {

//   let newValue = defaultValue;

//   return {
//     sum: (value) => { return newValue = newValue + value} ,
//     sub: (value) => { return newValue = newValue - value },
//     mult: (value) => { return newValue = newValue * value },
//     div: (value) => { return newValue = newValue / value},
//    }
//   }  

// const calc = createCalculator(10);

// console.log(calc.sum(5)); /// 15
// console.log(calc.mult(10)); // 150
// console.log(calc.sub(40)); // 110
// console.log(calc.div(10)); // 11




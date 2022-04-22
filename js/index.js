"use strict";

//1

const x = 1;
const y = 2;

console.log(x > y ? "X Больше" : "X не больше");

//2

const num = +prompt("Введите число");

if (num % 2 === 0) {
    alert(`Число ${num} четное`);
} else {
    alert(`Число ${num} нечетное`);
}

//3

let userNumber = +prompt("Введите целое число");
let numberLength = "";

switch (`${userNumber}`.length) {
case 1:
    numberLength = "однозначное";
    break;
case 2:
    numberLength = "двузначное";
    break;
case 3:
    numberLength = "трехзначное";
    break;
}

    if (userNumber >= 0) {
        alert(`Число ${userNumber} ${numberLength} положительное`);
    } else {
        alert(`Число ${userNumber} ${numberLength} отрицательное`);
    }

//4

    const userNumberOne = +prompt('Введите число');
    const userNumberTwo = +prompt('Введите число');
    const userNumberThree = +prompt('Введите число');

    if (userNumberOne >= userNumberTwo && userNumberOne >= userNumberThree) {
        alert(userNumberOne + ' самое большое число');
    } else if (userNumberTwo >= userNumberOne && userNumberTwo >= userNumberThree) {
        alert(userNumberTwo + ' самое большое число');
    } else {
        alert(userNumberThree + ' самое большое число');
    }


//5

    const sideOne = +prompt('side one');
    const sideTwo = +prompt('side two');
    const sideThree = +prompt('side three');

    if (sideOne + sideTwo > sideThree && sideOne + sideThree > sideTwo && sideTwo + sideThree > sideOne) {
        alert('Правильный треугольник')
    } else {
        alert('Неправильный треугольник')
    }

//1
function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  let counter = makeCounter();
  let counter2 = makeCounter();
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter2() ); // ? ---------0
  alert( counter2() ); // ? ---------1

//2
/*Дана функция ggg. Она требует первым параметром число, 
вторым функцию, которая возводит в квадрат, 
а третьим параметром функцию, которая возводит в куб. 
Эти функции есть как Function Declaration - kvadrat, kub. 
Пусть функция ggg вернет сумму квадрата и куба числа.*/

function ggg(number, func1, func2) {
	return (func1(number) + func2(number));
}

function kvadrat(n) {
	return n ** 2;
}
function kub(n) {
	return n ** 3;
}

console.log(ggg(2, kvadrat, kub));

//3
/*Сделайте функцию each, которая первым параметром принимает массив, 
а вторым - функцию, которая применится к каждому элементу массива. 
Функция each должна вернуть измененный массив.*/


function each(arr, func) {
    return func(arr);
}

let myArr = [2, 4, 6];
console.log( myArr );

function calc(a) {
	let newArr = [];
	for (let i = 0; i < a.length; i++) {
		newArr[i]=a[i] ** 2;
	}
	return newArr;
}

console.log( each(myArr, calc) );

//4
/*Сделайте функцию each, которая первым параметром принимает массив, 
а вторым - массив функций, которые по очереди применятся к каждому элементу массива: 
к первому элементу массива - первая функция, 
ко второму - вторая и так далее пока функции в массиве не закончатся, 
после этого возьмется первая функция, вторая и так далее по кругу*/

function each(numArr, funcArr) {
	let newArr = [];
	for (var i = 0; i < numArr.length; i++){
		let current = funcArr[i % funcArr.length](numArr[i]);
		newArr.push(current);
  	}
	return newArr;
}

let f1 = function(a){return a + 3};
let f2 = function(a){return a + 2};

let myFunc = [f1, f2];

let myArr = [1, 1, 1, 1];
console.log ( myArr );

console.log ( each(myArr, myFunc) );


//5
/*Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, 
но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. 
Решите задачу через замыкания - в замыкании должен хранится массив чисел, 
которые уже были сгенерированы функцией.*/

















// Задание 1 Создать переменные num1, num2 которые пользователь вводит с клавиатуры. Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// #1
let numFirst = 0;
let numSecond = 0;

numFirst = parseInt(prompt('Введите первое число:', 0));
console.log(numFirst);

numSecond = parseInt(prompt('Введите второе число:', 0));
console.log(numSecond);

if ((numFirst <= 1) && (numSecond >= 3)) {
  console.log(true);
} else {
  console.log(false);
}

// #2
let test = true;
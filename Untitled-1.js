// Задание 1: Приветствие
let name;

do {
    name = prompt("Введите ваше имя:");
} while (!/^[A-Za-zА-Яа-яЁё]+$/.test(name)); // Проверка на наличие только букв

let age;

do {
    age = prompt("Введите ваш возраст:");

    // Проверка, что введенные данные — это число и не меньше 0
} while (isNaN(age) || age === "" || age < 0);

alert(`Привет, ${name}! Вам ${age} лет.`);
console.log(`Привет, ${name}! Вам ${age} лет.`);

// Задание 2: Проверка возраста
if (age >= 18) {
    alert("Вы совершеннолетний");
} else {
    alert("Вы несовершеннолетний");
}

// Задание 3: Угадай число
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessedNumber;

do {
    guessedNumber = prompt("Угадайте число от 1 до 10:");

    if (guessedNumber == randomNumber) {
        alert("Поздравляем! Вы угадали число!");
    } else {
        guessedNumber < randomNumber 
            ? alert("Ваше число меньше!") 
            : alert("Ваше число больше!");
    }
} while (guessedNumber != randomNumber);

// Задание 4: Проверка пароля
let password = prompt("Введите пароль:");
const correctPassword = "12345";

if (password !== "" && password === correctPassword) {
    alert("Доступ разрешен");
} else if (password === "") {
    alert("Пароль не может быть пустым");
} else {
    alert("Доступ запрещен");
}

// Задание 5: Простой калькулятор
let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

let result;

if (operator === "+") {
    result = number1 + number2;
} else if (operator === "-") {
    result = number1 - number2;
} else if (operator === "*") {
    result = number1 * number2;
} else if (operator === "/") {
    result = number1 / number2;
} else {
    alert("Неверный оператор");
}

if (result !== undefined) {
    alert(`Результат: ${result}`);
}

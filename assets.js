// - Завдання №1 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Виведіть кожну зміну за допомогою: console.log

let a; // oб'явили змінну
a = 'hello'; // надали змінній а значення //
console.log(a);  // виводить значення а //

let b;
b = 'owu';
console.log(b);

let c;
c = 'owu';
console.log(c);

let d;
d = 'owu';
console.log(d);
// можна перевизначити змінну d
d = 'com';
console.log(d);

d = 1;
console.log(d);

d = 10;
console.log(d);

d = -999;
console.log(d);

d = 123;
console.log(d);

d = 3.14;
console.log(d);

d = 2.7;
console.log(d);

d = 16;
console.log(d);

d = true;
console.log(d);

d = false;
console.log(d);

// Завдання №2
// Створити 3 змінних Ім'я, По батькові, Прізвище, наповнити їх своїм ПІБ.  ' +
// З'єднати їх в одну змінну особу (Не об'єкт, просто для допомоги конкатенації)

let surname = 'Odud';
let name = 'Oleg';
let otchestvo = 'Opanasenko';

console.log(surname + ' ' + name + ' ' + otchestvo);

// Або по іншому

let fio = surname + name + otchestvo;
console.log(fio);

//Завдання №3
// За допомогою оператора typeof налаштування типи наступних змінних та вивести їх у консоль.
// нехай a1 = 100; нехай b1 = '100'; нехай c1 = істина;

let a1 = 100;
let b1 = '100';
let c1 = "істина";
console.log(typeof a1);
console.log(typeof b1);
console.log(typeof c1);

// Додаткове завдання
// За допомогою 3х різних prompt() отримати 3 слова, які є вашими Ім'ями, По-Батьківськими та роками.
// та вивести в консоль

    let name1 = prompt("Як вас звати", " ");
    console.log("Привіт"+name1);




// Пример области видимости

const a = 5;
const b = 10;

if (a < 30) {
    const c = 15;
    const d = 20;

    console.log(a);//Видид а за пределами тела if
    console.log(b);//Видид b за пределами тела if

    console.log(c);//Видит с в пределах цикла if
    console.log(d);//Видит d в пределах цикла if
}


console.log(a);//Видид а за пределами тела if
console.log(b);//Видид b за пределами тела if

console.log(c);//НЕ видит с в пределах тела if
console.log(d);//НЕ видит d в пределах тела if



// Выведи на экран общее количество яблок и винограда.
// Разницу яблок и винограда.

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total);
const diff = grapes - apples;
console.log(diff);


// Замени выражение переопределения комбинированным оператором +=.

let students = 100;
students += 50;
console.log(students);


// Разбери приоритет операторов в инструкции присвоения значения переменной result.

const result = 108 + 223 - (2 * 5);
console.log(result);



// Напиши скрипт, который выводит в консоль округленные вверх / вниз и т.д.значения переменной value.Используй методы Math.floor(), Math.ceil() и Math.round().Проверь что будет в консоли при значениях 27.3 и 27.9.

const values = 27.5;
const minResult = Math.floor(values);
console.log(minResult);

const maxResult = Math.ceil(values);
console.log(maxResult);

// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

const companyName = 'Cyberdune Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} in strock`;
console.log(message);


// Напиши скрипт который рассчитывает индекс массы тела человека.Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк(специально для задачи).Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.

// Индекс массиы тела необходимо округлить до одной цифры после запятой;
let weight = '88,3';
let height = '1.75';

weight = weight.replace(/,/g, '.');
console.log(weight);

height = (Number(height)) ** 2;
console.log(height);

const bmi = (weight / height).toFixed(1);

console.log(bmi); // 28.8



// Каким будет результат выражений ?
console.log(5 > 4);

console.log(10 >= '7');

console.log('2' > '12');

console.log('2' < '12');

console.log('4' == 4);

console.log('6' === 6);

console.log('false' === false);

// console.log(1 == true);

console.log(1 === true);

// console.log('0' == false);

console.log('0' === false);

// console.log('Papaya' < 'papaya');

console.log('Papaya' === 'papaya');

// console.log(undefined == null);

console.log(undefined === null);

// Каким будет результат выражений ?
console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && 'kiwi');

console.log(true && 0 && 'kiwi');

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);

// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null.В противном случае должно присваиваться значение defaultValue.Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.Используй оператор ?? (nullish coalescing operator).
const incimingValue = null;
const defaultValue = 10;
const value = incimingValue ?? (undefined || null);

console.log(value);


// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes(количество минут) в строку в формате часов и минут HH: MM.
const totalMinutes = 70;

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
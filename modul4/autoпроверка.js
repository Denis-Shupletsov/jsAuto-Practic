1
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// Объявлена функция makePizza
// Объявлена переменная result
// Значение переменной result это строка "Your pizza is being prepared, please wait."
// Значение переменной result получено с помощью вызова функции
// Объявлена переменная pointer
// Значение переменной pointer это ссылка на функцию makePizza


// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line
// const result = makePizza();
// const pointer = makePizza;



2
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром(параметр callback) 
// колбэк - функцию и возвращала ее вызов.
// Функция deliverPizza или makePizza будет передаваться как колбэк и 
// ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//     return callback(pizzaName);
// }
// makeMessage("Ultracheese", deliverPizza);
// makeMessage("Royal Grand", makePizza);

3
// Дополни второй вызов функции makePizza(pizzaName, callback),
// передав вторым аргументом инлайн колбэк - функцию eatPizza(pizzaName),
// которая логирует строку "Eating pizza <имя пиццы>"..

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
// });

// Пример из конспекта

// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest("Манго", function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest("Поли", function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });


4
// Необходимо написать логику обработки заказа пиццы.
// Выполни рефакторинг метода order так, чтобы он принимал вторым
// и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра
// pizzaName, метод order должен возвращать результат вызова
// колбэка onError, передавая ему аргументом строку
// "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра
// pizzaName, метод order должен возвращать результат вызова
// колбэка onSuccess, передавая ему аргументом имя заказанной
// пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки
// и вызовы методов.Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess(pizzaName);
//         };
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// };

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);


5
// Функция calculateTotalPrice(orderedItems) принимает один параметр
// orderedItems - массив чисел, и рассчитывает общую сумму его
// элементов, которая сохраняется в переменной totalPrice 
// и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она 
// использовала метод forEach.

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     for (let i = 0; i < orderedItems.length; i += 1) {
//         totalPrice += orderedItems[i];
//     }

//     // Change code above this line
//     return totalPrice;
// }

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     orderedItems.forEach(function (item) {
//         return totalPrice += item;
//     });

//     // Change code above this line
//     return totalPrice;
// }

6
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             filteredNumbers.push(numbers[i]);
//         }
//     }

//     // Change code above this line
//     return filteredNumbers;
// }

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }


7
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     for (let i = 0; i < firstArray.length; i += 1) {
//         if (secondArray.includes(firstArray[i])) {
//             commonElements.push(firstArray[i]);
//         }
//     }

//     return commonElements;
//     // Change code above this line
// }

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach(function (array) {
//         if (secondArray.includes(array)) {
//             commonElements.push(array);
//         }
//     });

//     return commonElements;
//     // Change code above this line
// }

8
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Change code above this line
//     return quantity * pricePerItem;
// }

9
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Change code above this line

10
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию.Замени коллбек - функцию передаваемую в метод forEach() на стрелочную функцию.
// Change code below this line
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (item) {
//         totalPrice += item;
//     });

//     return totalPrice;
// }

// const calculateTotalPrice = ((orderedItems) => {
//     let totalPrice = 0;

//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });

//     return totalPrice;
// });

11
// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// Change code below this line
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }

// const filterArray = ((numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// });

12
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     firstArray.forEach(function (element) {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Change code above this line
//     return commonElements;
// }


// Change code below this line
// const getCommonElements = ((firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Change code above this line
//     return commonElements;
// });

13
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//     // Change code below this line
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             numbers[i] = numbers[i] + value;
//         }
//     }
//     // Change code above this line
// }


// function changeEven(numbers, value) {
//     const newArray = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             newArray.push(number + value)
//         } else newArray.push(number);
//     });
//     return newArray;
// };

14
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет.Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

15
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг(свойство title) из всех объектов массива books.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);

16
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг(свойство genres) из массива книг books.
// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// Change code below this line

// const genresMap = books.map(book => book.genres);
// console.log(genresMap);

// const genres = books.flatMap(book => book.genres);
// console.log(genres);

17
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей(свойство name) из массива объектов в параметре users.

// Change code below this line
const getUserNames = users => {
    return users.map(user => user.name);
};

18
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей(свойство email) из массива объектов в параметре users.
// Change code below this line
const getUserEmails = users => {
    return users.map(user => user.email);
};
// Change code above this line

19
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных.Обязательно используй метод filter().

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

20
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг(свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        genres: ["adventure", "history"],
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        genres: ["fiction", "mysticism"],
    },
    {
        title: "Redder Than Blood",
        author: "Tanith Lee",
        genres: ["horror", "mysticism", "adventure"],
    },
];
// Change code below this line
const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

21
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых(свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем(свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);


22
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз(свойство eyeColor) совпадает со значением параметра color.
// [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male"
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female"
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male"
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female"
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male"
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male"
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female"
//     }
// ]

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color);
// };

// // Более короче, без return
// const getUsersWithEyeColor = (users, color) =>
//     (users.filter(user => user.eyeColor === color));


23
// [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ]
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых(свойство age) попадает в промежуток от minAge до maxAge.


// const getUsersWithAge = (users, minAge, maxAge) => {
//     return users.filter(user => user.age > minAge && user.age < maxAge);
// };

// // Более короче, без return
// const getUsersWithAge = (users, minAge, maxAge) => (users.filter(user => user.age > minAge && user.age < maxAge));

24

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName.Массив друзей пользователя хранится в свойстве friends

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName));
// };

const getUsersWithFriend = (users, friendName) =>
    (users.filter(user => user.friends.includes(friendName)));


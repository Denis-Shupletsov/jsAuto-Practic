1
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// Метод checkPizza объекта pizzaPalace использует this.
// Метод order объекта pizzaPalace использует this
// Вызов pizzaPalace.order("Smoked") возвращает строку "Order accepted, preparing «Smoked» pizza"
// Вызов pizzaPalace.order("Four meats") возвращает строку "Order accepted, preparing «Four meats» pizza"
// Вызов pizzaPalace.order("Big Mike") возвращает строку "Sorry, there is no pizza named «Big Mike»"
// Вызов pizzaPalace.order("Viennese") возвращает строку "Sorry, there is no pizza named «Viennese»"

const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
    // Change code below this line
    checkPizza(pizzaName) {
        return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
        const isPizzaAvailable = this.checkPizza(pizzaName);

        if (!isPizzaAvailable) {
            return `Sorry, there is no pizza named «${pizzaName}»`;
        }

        return `Order accepted, preparing «${pizzaName}» pizza`;
    },
    // Change code above this line
};

2
// Перед увольнением разработчик сломал исходный код управления аккаунтами пользователей нашего сервиса доставки еды.Выполни рефакторинг методов объекта customer, расставив отсутствующие this при обращении к свойствам объекта.

// После объявления объекта мы добавили вызовы методов в той последовательности, в которой твой код будут проверять тесты.Пожалуйста ничего там не меняй.

const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
        return this.balance;
    },
    getDiscount() {
        return this.discount;
    },
    setDiscount(value) {
        discount += this.value;
    },
    getOrders() {
        return this.orders;
    },
    addOrder(cost, order) {
        this.balance -= this.cost - this.cost * this.discount;
        this.orders.push(order);
    },
    // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

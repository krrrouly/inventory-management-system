// Inventory Management System
// Система учёта товаров на небольшом складе


// Исходный каталог товаров

const products = [
    { id: 501, name: "Блокнот", stock: 18 },
    { id: 502, name: "Гелевая ручка", stock: 35 }
];


// Добавление нового товара

function addProduct(id, name, stock) {
    products.push({
        id: id,
        name: name,
        stock: stock
    });
}


// Поиск товара по ID

function findProductById(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            return products[i];
        }
    }
}


// Изменение остатка товара

function updateStock(id, amount) {
    const foundProduct = findProductById(id);

    if (foundProduct === undefined) {
        console.log("Товар с ID " + id + " не найден");
        return;
    }

    foundProduct.stock += amount;

    console.log(
        "Остаток товара " + foundProduct.name + ":" + foundProduct.stock
    );
}


// Проверка работы программы

console.log("Исходный каталог: ");
console.log(products);

addProduct(503, "Линер", 12);
console.log("Каталог после добавления: ");
console.log(products);

console.log("Найденный товар: ");
console.log(findProductById(502));

updateStock(503, 5);
console.log("Каталог после обновления остатка: ");
console.log(products);

updateStock(999, 3);
// Интерфейсы являются абстракцией. Они указывают что долго быть в создаваемом объекте или классе (поля и методы)
// Создание объекта по интерфейсу IOne
var objIone = {
    id: 13,
    value: "test",
    desk: "simple desk"
};
// Создание объекта по интерфейсу IThree
var objIThree = {
    x: 5,
    y: "test",
    getData: function (data) {
        console.log("Data with type from interface", data);
        if (typeof this.x === "number") {
            return this.x;
        }
        else {
            return 0;
        }
    }
};
// Вызов метода созданного объекта, сохранение результата и вывод
var resObj = objIThree.getData(123);
console.log("resObj", resObj);
// Создание объекта по интерфейсу IStyles
var styles = {
    "val": 1,
    "val2": "string"
};

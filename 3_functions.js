// Создание функции с параметром типа number или string и без выходного значения void
// Иначе указывается тип выходного значения
function firstFnc(data) {
    console.log("data", data);
}
firstFnc("5");
// Метод реализующий перегрузки
// Если есть не обязательный параметр необходимо указать его с модификатором "?""
function testOverload(a, b) {
    if (a && b) {
        return {
            id: a,
            value: b
        };
    }
    else if (a) {
        console.log("paramets a is type number");
        return a * 2;
    }
    console.log("No parameters");
}
testOverload();
console.log(testOverload(5));
console.log(testOverload(5, "test"));

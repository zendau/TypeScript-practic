// Создание функции с параметром типа number или string и без выходного значения void
// Иначе указывается тип выходного значения
function firstFnc(data: number | string) : void {
    console.log("data", data)
}

firstFnc("5")


interface IOverloadData {
    id: number,
    value: string
}


// Объявление возможных перегрузок
function testOverload() : void
function testOverload(a: number) : number
// Перегрузка которая должна вернуть объект совпадающий по интерфейсу IOverloadData
function testOverload(a: number, b: string) : IOverloadData


// Метод реализующий перегрузки
// Если есть не обязательный параметр необходимо указать его с модификатором "?""
function testOverload(a?: number, b?: string) {
    // Перегрузка возвращения объект по интерфейсу IOverloadData
    if (a && b) {
        return {
           id: a,
           value: b
        }
    // Перегрузка возвращающая number
    }else if (a) {
        console.log("paramets a is type number")
        return a * 2
    }
    // Перегрузка Void
    console.log("No parameters")

}

testOverload()
console.log(testOverload(5))
console.log(testOverload(5, "test"))
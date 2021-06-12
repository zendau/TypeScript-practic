// Интерфейсы являются абстракцией. Они указывают что долго быть в создаваемом объекте или классе (поля и методы)

// Модификаторы
// readonly - только для чтения
// ? - необязательное поле

interface IOne {
    readonly id: number,
    value: string,
    desk?: string,

}


// Создание объекта по интерфейсу IOne
const objIone : IOne = {
    id: 13,
    value: "test",
    desk: "simple desk"
}

// Интерфейс с полями множества типов
interface ITwo {
    x: number | undefined | string
    y: number | undefined | string
}

// Наследование интерфейса другого интерфейса
// Преопределение метода в интерфейсе
// Данный метод принимает значения типа number и возвращает так же тип number
interface IThree extends ITwo {
    getData: (data: number) => number
}

// Создание объекта по интерфейсу IThree
const objIThree : IThree = {
    x: 5,
    y: "test",
    getData(data): number {
        console.log("Data with type from interface", data)
        if (typeof this.x === "number") {
            return this.x
        } else {
            return 0
        }
    }
}

// Вызов метода созданного объекта, сохранение результата и вывод
const resObj : number = objIThree.getData(123)
console.log("resObj", resObj)

// Создание интерфейса с типизацией ключа
interface IStyles {
    [key: string]: string | number
}

// Создание объекта по интерфейсу IStyles
const styles : IStyles = {
    "val": 1,
    "val2": "string"
}
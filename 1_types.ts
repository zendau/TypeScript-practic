// Создание переменных
const test : boolean | string = "2"
const first : number = 12

// Виды создания массивов
const firstArray : Array<number> = [1,2,3]
const tupleArray : number[] = [578, 789]

// tuple
// В данном массиве преопределены типы данных для последовательного ввода
// т.е. если первое значение равно первому указанному типу и так далее

const userData: [string, number] = ["user", 64]

// Any
// Ключевое слово "Any" позволяет создать динамическую переменную

const dinamic : any = "test"
const dinamicArr : any[] = ["test", 54]

// Type 
// Создание своего типа данных

type List = string[] | number[]

const arrList : List = ["test", "hello"]
const numList : List = [34, 53]

// Создание типа данных для объекта
// Но придпочтительнее использовать для объектов interface
type myRow = {
    id: number,
    name: string,
    status: boolean
}

const dataRow : Array<myRow> = [
    {
        id: 1,
        name: "test name",
        status: true
    }
]


// Generic
// При работе с массивами можно задать generic тип что бы функция могла принимать любой тип данных

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5]
const arrayOfStrings: Array<string> = ['Hello', 'World']


// Вместо t1 можно использовать любое другое значение
function reverse<t1>(array: t1[]): t1[] {
  return array.reverse()
}

console.log(reverse(arrayOfNumbers))
console.log(reverse(arrayOfStrings))
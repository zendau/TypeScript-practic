// Создание переменных
var test = "2";
var first = 12;
// Виды создания массивов
var firstArray = [1, 2, 3];
var tupleArray = [578, 789];
// tuple
// В данном массиве преопределены типы данных для последовательного ввода
// т.е. если первое значение равно первому указанному типу и так далее
var userData = ["user", 64];
// Any
// Ключевое слово "Any" позволяет создать динамическую переменную
var dinamic = "test";
var dinamicArr = ["test", 54];
var arrList = ["test", "hello"];
var numList = [34, 53];
var dataRow = [
    {
        id: 1,
        name: "test name",
        status: true
    }
];
// Generic
// При работе с массивами можно задать generic тип что бы функция могла принимать любой тип данных
var arrayOfNumbers = [1, 1, 2, 3, 5];
var arrayOfStrings = ['Hello', 'World'];
// Вместо буквы T можно использовать любое другое значение
function reverse(array) {
    return array.reverse();
}
console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfStrings));

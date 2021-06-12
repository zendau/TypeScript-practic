// В TS существуют такие модификаторы классов
// abstract,
// static,
// public,
// private,
// protected

// Создание абстрактного класса
abstract class testAbs {
    constructor() {
        console.log("message from abstract constructor")
    }
    public data : string = "hello from abstract class"
    message() : string {
        return this.data
    }
}

// Созднаие класса который наследует абстрактный класс testAbs
class firstClass extends testAbs {
    constructor() {
        super()
        // Вызов метода абстрактного класса
        this.message()
    }
}

const fClass = new firstClass()


// Интерфейс который преопределяет public поля и методы наследуемого класса
interface IRocket {
    time: number
    start(arg: number): any
}

// Абстрактный класс который принимает настройки интерфейса IRocket
abstract class Rocket implements IRocket {
    
    time : number = 10

    constructor() {
        this.start(this.time)
    }

    start(timer: number) : void {
        
        for (let i = timer; i > 0; i--) {
            console.log(i)
        }
    } 
}

// Созднаие класса который наследует абстрактный класс abstract
class Start extends Rocket {
    constructor() {
        super()
        this.end()
    }
    private end() : void {
        console.log("ПОЕХАЛИ")
    }
}

const power = new Start()

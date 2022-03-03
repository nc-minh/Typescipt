// CLASS
export class Employee{
    // cách 1
    // public name: string
    // readonly age: number
    // private gender: 'female' | 'male'

    // constructor(name: string, age: number, gender: 'female' | 'male'){
    //     this.name = name
    //     this.age = age
    //     this.gender = gender
    // }

    print(){
        return `Name: ${this.name}, Age: ${this.age}, gender: ${this.gender}!`
    }

    // cách 2
    constructor(
        public name: string,
        readonly age: number,
        private gender: 'female' | 'male'
    ) {}
}

const ming = new Employee('Minh', 20, 'male')

console.log(ming)
console.log(ming.print())
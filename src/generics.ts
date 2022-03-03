// GENERICS
type strArr = Array<string>
type numArr = Array<number>

const last = (arr: numArr) => arr[arr.length - 1]

console.log(last([4, 5, 7]))

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]

console.log(lastT(['a', 'b', 'z']))

const makeArr = <G>(x: G) => [x]
console.log(makeArr(['a', 3]))

const makeArrXY = <X, Y>(x: X, y: Y) => [x, y]
console.log(makeArrXY('oke', 3))

// tạo tuple từ generics
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y]
const cloneTuple = makeTuple(4, 5)
const cloneTuple2 = makeTuple<string, number>('stringne', 10)

// GENERICS EXTENDS
const makeFullName = obj => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const makeFullNameConstraint = (obj: {firstName: string, lastName: string}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const makeFullNameConstraintGenerics = <T extends {firstName: string; lastName: string}>(obj: T) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const addNewEmployee = (employee: object) => {
    const uid = (Math.floor(Math.random() * 10000))

    return{
        ...employee,
        uid
    }
}

const employeeOne = addNewEmployee({
    name: 'Ming',
    age: 20,
})

console.log(employeeOne)
// console.log(employeeOne.name) ->> không thể làm như này vì nó không biết trong employeeOne có name

// Using generics
const addNewEmployee_Generics = <T>(employee: T) => {
    const uid = (Math.floor(Math.random() * 10000))

    return{
        ...employee,
        uid
    }
}

const employeeTwo = addNewEmployee_Generics({
    name: 'MingGethigh',
    age: 20
})

console.log(employeeTwo)
console.log(employeeTwo.name)

//
const addNewEmployee_Generics_more = <T extends {name: string}>(employee: T) => {
    const uid = (Math.floor(Math.random() * 10000))

    return{
        ...employee,
        uid
    }
}

const employeeThree = addNewEmployee_Generics_more({
    name: 'MingGetbar',
    age: 20
})
console.log(employeeThree)
console.log(employeeThree.name)


//GENERICS IN INTERFACE
interface Resource<T>{
    uid: number;
    name: string;
    data: T;
}

const resourceOne: Resource<string> = {
    uid: 1,
    name: 'Ming',
    data: 'OKE'
}

// ex more
type NumberResource = Resource<number>
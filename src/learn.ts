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

const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => [x, y]
makeTuple(4, 5)
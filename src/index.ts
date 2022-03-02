function summ(a: number, b: number): number{
    return a + b
}

console.log("sum: ", summ(-10, 5))

class training{
    sayHi(name: string): void{
        console.log('Say hi: ', name)
    }
}

// primitive types
// ...
const myName: string = 'String'
const myNum: number = 10
const myBoolean: boolean = true
const myUndefined: undefined = undefined
const myNull: null = null
const bigNum: bigint = BigInt(10)

console.log(typeof bigNum)

// Interface

enum PetType{
    Dog,
    Cat,
    Bird,
    Fish,
    Reptile
}

interface Pet{
    name: string;
    type: PetType
}

interface Contact{
    name: string;
    phone: string;
    email?: string;
    pet?: Pet;
}

const contacts:Contact[] = []

const newContact: Contact = {
    name: 'Nguyen Cong Minh',
    phone: '4649846',
    email: 'ncm@gmail.com',
    pet: {
        name: 'chi',
        type: PetType.Dog
    }
}

contacts.push(newContact)

// Optional properties != (require)
// -> có hay không cũng được thêm ?

const secondContact: Contact = {
    name: 'Nguyen Cong Minh',
    phone: '4649846'
}
// console.log(contacts)

// console.log(secondContact)

// contacts.push(secondContact)

// console.log(contacts)

// Optinal chaining
function getPetName(contact: Contact): string{
    return contact.pet?.name || 'Không có pet'
}

console.log(getPetName(newContact))

// extend interface

interface Button{
    label: string;
    onClick: () => void;
}

const button: Button = {
    label: 'Submit',
    onClick: () => {
        console.log('click!')
    }
}

interface iconButton extends Button{
    icon: string;
}

const heart: iconButton = {
    label: 'Submit',
    onClick: () => {
        console.log('click!')
    },
    icon: 'heart-icon'
}

// console.log("hehe: ", heart.onClick())

// Implement interface

class MyContact implements Contact{
    name: string;
    phone: string;

    constructor(name: string, phone: string){
        this.name = name
        this.phone = phone
    }
}

const a = new MyContact('Minhdeptrai', '00000')

// console.log(a)

class ContactApp{
    render(){
        const contacts: Contact[] = [
            { name: 'A', phone: '123' },
            { name: 'B', phone: '456' }
        ]

        console.table(contacts)
    }
}

const app = new ContactApp()

app.render()

// 
interface ContactAdapter{
    getData: () => Promise<Contact[]>
}

class ContactApp1{
    adapter: ContactAdapter;
    constructor(adapter: ContactAdapter){
        this.adapter = adapter
    }

    async render(){
        const contacts1: Contact[] = 
            await this.adapter.getData()
        console.table(contacts1)
    }    
}

class MyContactAdapter implements ContactAdapter{
    async getData() {
        const contacts1: Contact[] = [
            { name: 'A', phone: '333' },
            { name: 'B', phone: '999' },
        ];

        return contacts1
    }
}

const adapter = new MyContactAdapter()
const app1 = new ContactApp1(adapter)

app1.render()

// Interface declaration merging
// Có thể tạo ra 2 interface cùng tên và sẽ gộp các trường lại làm 1

// types inference
// Khi tạo một biến a được gán bằng một class hoặc một interface thì không cần khai báo kiểu của nó TS sẽ tự hiểu

// Contextual typing

// Duck typing (structural typing)
// -> nếu mà không khai báo kiểu cho một object nhưng object đó có cấu trúc giống với interface đã 
// định nghĩa(và có các fill mà nó require) thì vẫn có thể push vào một mảng yêu cầu interface kia

// enum

//union type
// có thể không truyền hoặc chỉ có thể là một số data đã quy định sẵn
function isWeekend(date: Date | string | number): boolean{
    if(typeof date === 'string' || typeof date === 'number'){
        date = new Date(date)
    }

    const day = date.getDay()
    return day === 6 || day === 0
}

console.log(isWeekend(new Date()))
console.log(isWeekend('2022-03-5'))

// type alias
// Tạo kiểu dữ liệu mới trên những dữ liệu đã có
type MixedDate = Date | string | number

function isLastDayOfMonth(date: MixedDate): boolean{
    return false
}
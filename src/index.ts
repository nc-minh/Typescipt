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

interface Pet{
    name: string;
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
        name: 'chi'
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

console.log("hehe: ", heart.onClick())
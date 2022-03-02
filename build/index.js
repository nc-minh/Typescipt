function summ(a, b) {
    return a + b;
}
console.log("sum: ", summ(-10, 5));
class training {
    sayHi(name) {
        console.log('Say hi: ', name);
    }
}
// primitive types
// ...
const myName = 'String';
const myNum = 10;
const myBoolean = true;
const myUndefined = undefined;
const myNull = null;
const bigNum = BigInt(10);
console.log(typeof bigNum);
// Interface
var PetType;
(function (PetType) {
    PetType[PetType["Dog"] = 0] = "Dog";
    PetType[PetType["Cat"] = 1] = "Cat";
    PetType[PetType["Bird"] = 2] = "Bird";
    PetType[PetType["Fish"] = 3] = "Fish";
    PetType[PetType["Reptile"] = 4] = "Reptile";
})(PetType || (PetType = {}));
const contacts = [];
const newContact = {
    name: 'Nguyen Cong Minh',
    phone: '4649846',
    email: 'ncm@gmail.com',
    pet: {
        name: 'chi',
        type: PetType.Dog
    }
};
contacts.push(newContact);
// Optional properties != (require)
// -> có hay không cũng được thêm ?
const secondContact = {
    name: 'Nguyen Cong Minh',
    phone: '4649846'
};
// console.log(contacts)
// console.log(secondContact)
// contacts.push(secondContact)
// console.log(contacts)
// Optinal chaining
function getPetName(contact) {
    return contact.pet?.name || 'Không có pet';
}
console.log(getPetName(newContact));
const button = {
    label: 'Submit',
    onClick: () => {
        console.log('click!');
    }
};
const heart = {
    label: 'Submit',
    onClick: () => {
        console.log('click!');
    },
    icon: 'heart-icon'
};
// console.log("hehe: ", heart.onClick())
// Implement interface
class MyContact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}
const a = new MyContact('Minhdeptrai', '00000');
// console.log(a)
class ContactApp {
    render() {
        const contacts = [
            { name: 'A', phone: '123' },
            { name: 'B', phone: '456' }
        ];
        console.table(contacts);
    }
}
const app = new ContactApp();
app.render();
class ContactApp1 {
    constructor(adapter) {
        this.adapter = adapter;
    }
    async render() {
        const contacts1 = await this.adapter.getData();
        console.table(contacts1);
    }
}
class MyContactAdapter {
    async getData() {
        const contacts1 = [
            { name: 'A', phone: '333' },
            { name: 'B', phone: '999' },
        ];
        return contacts1;
    }
}
const adapter = new MyContactAdapter();
const app1 = new ContactApp1(adapter);
app1.render();
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
function isWeekend(date) {
    if (typeof date === 'string' || typeof date === 'number') {
        date = new Date(date);
    }
    const day = date.getDay();
    return day === 6 || day === 0;
}
console.log(isWeekend(new Date()));
console.log(isWeekend('2022-03-5'));
function isLastDayOfMonth(date) {
    return false;
}

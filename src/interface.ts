//INTERFACE

interface Person{
    name: string;
    age: number;
    speak(lang: string): void;
    spend(amount: number): number
}

const ming: Person = {
    name: 'Mingdz',
    age: 20,
    speak(text: string): void{
        console.log(text)
    },
    spend(amt: number): number{
        return amt
    }
}

console.log(ming)
ming.speak('viet lam')
console.log(ming.spend(5000));

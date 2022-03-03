import { Invoice, Payment } from './classImplements';
import { hasPrint } from './interfaceForClass';
const documentOne: hasPrint = new Invoice('Vinamilk', 'drink milk', 1560000)
const documentTwo: hasPrint = new Payment('AgriBank', 'loan', 50000000)

const allDocuments: hasPrint[] = []

allDocuments.push(documentOne)
allDocuments.push(documentTwo)

console.log(allDocuments)
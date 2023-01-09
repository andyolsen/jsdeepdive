import { b }             from './module1.js'
import { funcB, ClassB } from './module1.js'

console.log("Start of module2.js")

console.log(b)
funcB()
let obj = new ClassB()

console.log("End of module2.js")

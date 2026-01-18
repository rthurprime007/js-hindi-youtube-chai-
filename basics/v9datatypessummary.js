// #Primitive 
// 7 types
//1. string
//2.Number
//3.Boolean
//4.null
//5.undefined
//6.Symbol (to give a value uniqueness)
//7.BigInt

//************FOR CHECKING OUT SYMBOL DATATYPE**** */
const id = Symbol('123')
const anotherid = Symbol('123')
//their value maybe same but they are still different 
console.log(id === anotherid)
//it will show false



// Refrence type (non primitive)
// 1. Array
// 2. Objects
// 3. Functions

// arrays ko hum [] main likhte ha 
//**********example of an array */
const heroes = ["shaktiman" , "naagraj" , "doga"]

//Objects ko hum {} main likhte haan 
//*************example of an object********** */
let myObj = {
    name: "java",
    age: 27     
}


//*****************functions*************
function ko declare krne k kafi tarike ha yaha hum variable wala tarika seekhenge
//function(){}  this is function
const myFunction = function(){
    console.log("Hello World")
}



//non primitive ka console.log(typeof) hamesha function hi ayega

//to study
// https://262.ecma-international.org/5.1/#sec-11.4.3

//q. IS JAVA CODING LANGUAGE DYNAMIC OR STATISTICALLY TYPED ?





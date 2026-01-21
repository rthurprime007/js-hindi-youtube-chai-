//********************************v5databases***************************
console.log("javad");console.log("ahmed")
//result > javad
//         ahmed
// aur agar dono ko upar niche likho tab bhi same result ayega

//**********************v6v7conversion&operations.js********************
//*******experiment converting number to string
//by using let variable
let age = 99
let newage = new String(age)
let newage = String(age) ///works same 

console.log(newage) //result > [String: '99']
console.log(age)    //result > 99

//by using const variable
const age = 99
const newage = new String(age)

console.log(age); // result > 99
console.log(newage); //result > [String: '99']

//*****using boolean */
let gamma = Boolean
gamma = 1
console.log(gamma);
//result = true
//cases for false (0 , -0 , 0n , " " , null , undefined , Nan)
//for this there is still to much depth


//////////operations
let num = 100
let num1 = 200
let num2 = 300

console.log(num + num1 + num2) //result > 600
console.log("num" + "num1" + "num2")  //result > numnum1num2 ye main galti kr raha tha

let num3 = num  + num1 + num2
console.log(num3)//// ese bhi result> 600 hi ayega

//*******************v8comparison ******************/
console.log("2">1);
//result > true   "2" java will consider a number

console.log("javad">"ahmed")
//result > true

console.log(9>"ahmed")
//result > false

let javad = 1
let ahmed = 2
console.log(javad > ahmed) //result> false phir bhi ye code theek nahi
//ek const hi define krdo

console.log(null> "javad") //result > false









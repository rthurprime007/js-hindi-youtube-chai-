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

//********************v11strings********** */
const game = new String("callofduty") //// agar callofduty ke (l) ka  indexof krunga to
                                      //// to kya hoga kyuki (l) do baar ha 
console.log(gamename.charAt(5))  //result>> 2    
console.log(game.indexOf("l" , 3)) // result >> 3     ese ayegi doosre (l) ki value

// splice aur substring main difference
const game = new String("callofduty")
// const newgame = game.slice(3 , 6)
// const allnewgame = game.substring(3 , 6)

console.log(newgame); //result>> lof
console.log(allnewgame); //result>> lof


//so whats the difference than
///difference between splice and substring

//1.when start > end
//for slice
const newgame = game.slice(6 , 3)
console.log(newgame); //result > empty 

//for substring
const allnewgame = game.substring(6 , 3)
console.log(allnewgame); //result > lof   swaps vaue


//2.negetive values
 // splice
const allnewgame = game.slice(-4)
console.log(allnewgame); //result > duty  supports negetive index

//substring
const allnewgame = game.substring(-4)
console.log(allnewgame); //result > duty treats negetive as 0

//******************v12numberandmaths.js************************

//math.  does on work on array
let myarr = [3.5 , 4.8 ,5.9 ,6.7 ,7.3 ,7.7]
console.log(Math.max (myarr) ); //result> NaN

let myarr = (3.5 , 4.8 ,5.9 ,6.7 ,7.3 ,7.7) //CHANGED BRACKETS
console.log(Math.max (myarr) ); //RESULT > 7.7


/////USIN MATH. two times
let myarr = (3.5 , 4.8 ,5.9 ,6.7 ,7.3 ,7.7)

//let newarr = new Number("myarr")
console.log(Math.floor(Math.max (myarr)) ); //result> 7









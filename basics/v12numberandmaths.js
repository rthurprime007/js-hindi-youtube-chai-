const score = 400 //vese to js ase hi no.  define krega lekin
const balance = new Number(100) //agar isko exclusively define krna ho 
//console.log(score);  result> 400  
//console.log(balance); result> [Number: 100] yaha machine specifically bta rahi ha ki number ha
//browser pr same cheez ayegi > Number {100}
//liekin waha pr hum inke prtotypes bhi dekh skte ha
//ye vo prototypes ha jo number vali ha

//lekin isko hum string main convert kre 
console.log(balance.toString()) //> result 100
//aur agar ab typeof check kre to ye string hi dikhayega
console.log(balance.toString().length) // ab kuch properties string ki bhi use kr skte ha
//result> 3

console.log(balance.toFixed(1)); // decimal k lie result> 100.0
console.log(balance.toFixed(2))  // resut > 100.00

const othernumber = 23.8966
const firstothernumber = 123.8966
const secondothernumber = 1123.8966


console.log(othernumber.toPrecision(3))          //result>23.9
console.log(firstothernumber.toPrecision(3))     //result>124
console.log(secondothernumber.toPrecision(3))    //1.24e+3



const hundreds = 10000000 // hard to read 
console.log(hundreds.toLocaleString())         //result> 10.000,000
console.log(hundreds.toLocaleString('en-IN'))  //result> 1,00,00,000 for indian format

// hum maximum,minimum aur safe integer value bhi pta kr skte ha see SS

//*******************maths********************* */
console.log((Math));// result> Object [Math] {}
//lekin agar ye console browser pr daloge to math k bohot sare functions khul kr ayenge

console.log(Math.abs(-4)) // result>4 negetive to positive
console.log(Math.round(4.6)); // result > 5 roundof
console.log(Math.ceil(4.2)); //  result > 5 choose after no. of decimal
console.log(Math.floor(4.9));  // result > 4 choose before no. of decimal
console.log(Math.min(4 , 3 , 6 ,8));   // result. 3 loest dig9it 
console.log(Math.max(4, 3 ,6 , 8))  // result > 8 hihest digit

console.log(Math.random())// result > o.87498746849,0.7898749749give random values between 0 and 1

//agar hame 1 se upar value chahiye 
console.log(Math.random()*10) //result > 3.874947947 , 4.98745948795
//phir bhi ho skta ha random ki value aae 0.032424245 ye bhi 1 aur  0 k beech ha
// to *10 krne k baad bhi value .32424245 aa jayegi jo 1 se kam ha

console.log(Math.random()*10 + 1) // ab value 1 se upar hi ayegi ex > 3.7836246
//phir bhi ye theek nahi ha *10 wale data ko bracket main kr loo
//EXAMPLE
console.log((Math.random()*10) + 1)
conole.log(Math.floor(Math.random()*10)+1) //ye value ab integer ayegi decimal se pehle wali 
//agar (ceil) lga dete to decimal se upar wali aati   result > 7 , 8  ,9



//proper example of using maths in algebra
//mere ko no chahiye 10 seupar aur 20 se niche 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1))+ min);
//generic formuale ha vese to lekin phir bhi logic samaj lio
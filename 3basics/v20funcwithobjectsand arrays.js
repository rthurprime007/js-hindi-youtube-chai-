//shoping price cart k pese add krne ke hisab se parameters
function calculatecartprice(num1){
    return num1
}

console.log(calculatecartprice(200)); //result = 200
console.log(calculatecartprice(200 , 400 ,500)); // result > 200 ab bhi 200 hi keval aya

//ab use krenge restoprator is problem ko solve krne k lie
//inko calculate krna aage loop main seekhenge

//restoperator (...) ten dot se symbolize hota vese spread operator bhi (...)
//se symbolize hota ha dono ka use case alaga ha 
//vo age kabhi padhaenge

function newcalculatecartprice( ...num1){ // yaha laganaha
    return num1
}
 
console.log(newcalculatecartprice(200 , 400 ,500)); //result>  [ 200, 400, 500 ] array ki form main aa gya



function allnewcalculatecartprice( val1 ,val2 ,...num1){ //kai baar log val bhi lagate ha
    return num1
}
 
console.log(allnewcalculatecartprice(200 , 400 ,500 , 600)); //result> [ 500 , 600 ] kyki baki ki value num main chali gyi




//***************** objects ith functions

const user = {
    coursename : "jsscript",
    price : 500
    
}

// function handleobject(user){
//     console.log(`course is ${"coursename"} and the price is ${"price"}`);
    
// }

// handleobject() ////  ye upar ka function try krke dekha tha error dikha raha ha

function handleobject(anyobject){
     console.log(`course is ${anyobject.coursename} and the price is ${anyobject.price}`);
}

handleobject(user)  //result > course is jsscript and the price is 500

//one more method
handleobject({
    username : "python",
    price : 699
})   //result > course is undefined and the price is 699      ye result upar user wale object se nahi aya





//*******************array with function */

const mynewarray = [200 ,300 ,400 ,600]

// function returnsecondvalue(getarray){
//     return getarray
// }
// console.log(returnsecondvalue(mynewarray));  //result > [ 200, 300, 400, 600 ]

function returnsecondvalue(getarray){
    return getarray[3]
}

 console.log(returnsecondvalue(mynewarray))   //result > 600
 console.log(returnsecondvalue([100 , 800 , 900 , 1200]) )  //result >1200


//poora code run nahi hona chahiye 
//jese login ho to koi code run hona chahiye 
//andar koi function ho raha ho uska code run baad main hona chahiye



//if
// if (condition ){}  <ye agar true hoga tabhi ye execute hoga false hoga to nahi hoga
//isme litrally false bhi dal skte ha

const isuserloggedin = true
if (isuserloggedin) {}

//< , > ,<= , >= , ==(q.is equals to ) , !=(q.is not equals to)

if ( 3 != 2)  {}  //<ye true ha islie execute hoga

// if ( 2 == "2") {              //double ==(equals)
//     console.log("executed")
// } //result > executed

// if ( 2 === "2") {              //double === (strict checking) 
//     console.log("executed")
// } //will not run

// if ( 2 != 3) {              //q. != means not equals to
//     console.log("executed")
// } //result>  executed


const temperature = 41

// if ( temperature < 50) {              //double === (strict checking) 
//     console.log("executed")
// } // result > executed

//////////////////////////// else (agar  if  true na ho to ye run hoga)
// if ( temperature < 50) {               
//     console.log("the temperature is less than 50")
// } else {
//     console.log("temperature is greater than 50");
    
// } //result > the temperature is less than 50
//  agar temperature = 52 to aata     temperature is greater than 50

const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// } //result user power: fly
// console.log(`user power: ${power}`)   //ye error how krga kyoki scope k bahar ha

// lekin agar scope k andar const ki jagah var use hoga 
//to vo scope k bahar bhi print kr dega 
//usse code kharab ho jaega






// const balance = 1000
// if(balance > 500)  console.log("test"); //ese print ho jaega 

// if(balance > 500)  console.log("test"),
// console.log("test2");                   //ese print bhi kr skte ha
// //                                        ese multiple line bhi likh skte ha
// //                                         
// if(balance > 500)  console.log("test"),console.log("test2");  
// //lekin ye bohot kharab method ha
// //ye coding main usually chalta nahi ha
 

////////////////multiple conditions
const balance = 1000
if (balance < 500){
    console.log( "less than 500");    
}else if(balance < 750){
    console.log("less than 750");
}else if (balance < 900) {
    console.log("less than 900");   
} else {
    console.log("less than 1200");
    
}
 
//result> less than 1200



/////////////////////multiple instances 
// const userloggedin = true
// const debitcard = true

// if (userloggedin && debitcard ){ //agar ye dono true honge to hi execution hoga
//     console.log("allow to by courses");
    
// } //result> allow to buy courses
// // && ye lest and right dono conditions ko check krta haan

//// if (userloggedin && debitcard && 2==3) ye bhi execute hoga kyoki sare true ha




const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(userloggedin || debitcard || loggedinfromgoogle || loggedinfromgoogle ){
    console.log("login successful");
    
}//result = login successful

//        ||    meaning or
//               agar nkoi bhi true ha tabhi execute hoga





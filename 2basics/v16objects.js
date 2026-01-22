//singleton = koi bhi constructor jab ab bnate ha to ek single object
//            bnta ha yani ya apne tarah ka ek object haa
//jab literals se banata ha to singleton nahi
//bnta usme bohot sare instances hote ha 
//object literals (hum iske bare ma  padhe ge)

//>const jsuser = {}  // ye ha object

Object.create = {} // ye singleton k through bnta is method ka
//aage kabhi dekhenge

const jsuser = {
    name: "javad",
    Age:27,
    location: "meerut",
    email: "javadahmed@gmail.com",
    isloggedin : false,
    lastlogin : ["sunday" , "monday" ] //array bhi dal skte ha

}  // ye ha object

myArray = ["j" , "a"] // array main hum number [0] , [2]  se define krte ha
//lekin  object main hum kese bhi define kr skte 
//bas usko name ese krna hogo jese name:javad
//                                    0:javad

//ab jo ye [name: javad] main name ha isko "name" likho ya khali name likho
// js isko string hi padega

//ab objects ko access kese krna ha

console.log(jsuser.email); //result > javadahmed@gmail.com ye favourable method 
//nahi ha



//console.log(jsuser[email]) ese bhi email aa skta ha lekin abhi filhal error ayega kyoki  
console.log(jsuser["email"]) // result>> javadahmed@gmail.com ab theek ha

//console.log(jsuser.email); isme ek problem aati ha

// const jsuser = {
 // "name": "javad", agar name  " " k andar ha to console.log(jsuser.email); ye error dikhayega
                                    //islie hamesha console.log(jsuser["email"])  use kro
   // Age:27,
    // location: "meerut",
    // email: "javadahmed@gmail.com",
    // isloggedin : false,
    // lastlogin : ["sunday" , "monday" ]


   // **********************symbol kese use kre
  //ek symbol ko objects ki keys main add kese kre(interview question)
  const mysym = Symbol("key1")
  
   const newjs = {
    name: "javad",
    Age:27,
    //mysym: "mykey1",
    [mysym]: "mykey1",  // correct way
    location: "meerut",
    email: "javadahmed@gmail.com",
    isloggedin : false,
    lastlogin : ["sunday" , "monday" ] 

}

console.log(newjs.mysym); //  result > mykey1 ye abhi bhi symbol ki tarah nahi  baalki string ki tarah use ho raha ha
//lekin isme ab bhi key ha andar hi kahi
console.log(typeof newjs.mysym); // result > string proof
 
// isko fix krne k lie         mysym: "mykey1",    na type krke
//  isko [mysym: "mykey1",] kro  q.interview question
// aur console log ko bhi console.log(newjs[mysym])  type kro
console.log(newjs[mysym])




///***************values change and freeze
newjs.email = "arthur.com" // isse value change ho jayegi
Object.freeze(newjs) // ab is object ki koi value change nahi hogi // is line ka dhyan rakhna ache se kai bar ye error kr skte ha
newjs.email = "optimus.com"
console.log(newjs);
//partial result

// Age: 27,
//   mysym: 'mykey1',
//   location: 'meerut',
//   email: 'arthur.com', //ye optimus.com nahi hua
//   isloggedin: false,
//   lastlogin: [ 'sunday', 'monday' ]




///************************** objects main funstions ko declare kese kre

   const allnewjs = {
    name: "javad",
    Age:27, 
    location: "meerut",
    email: "javadahmed@gmail.com",
    isloggedin : false,
    lastlogin : ["sunday" , "monday" ]
   }
 
   console.log(allnewjs);
//functions ko variable ki tarah treat kro   
allnewjs.greetings = function(){
    console.log("hello js user");
    
}

//console.log(allnewjs.greetings);    //result > [Function (anonymous)] function execute nahia aya bas uska refrence aya ha
//console.log(allnewjs.greetings()); // result >  



//lets refrence the naame inside the objest
 
allnewjs.greetings = function(){
console.log(`hello js user, ${this.name}`); //isko backtics main loon aur ${this.}  this. ye dabate hi apke
//objects k andar ki cheeze aa jayengi  
}

console.log(allnewjs.greetings()); //result > hello js user, javad









// sinal note zyadatar kam . lgakr ho jate ha lekin bohot sari cheeze [ ]
// //lga kr hi hongi
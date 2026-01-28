let a = 10 
const b = 20
var c = 30
//teeno k answer 10 , 20 , 30 hi ayenge 
//to phir problem kaha ayi
//to problem kaha ayi var k sath

//{} < isko kehte ha scope    if ke sath use krenge aaj

if (true) {
    let d = 50
    const e = 60
    var f = 70
}


    let d = 500
    const e = 600
    var f = 700
//console.log(d); result > error
//console.log(e); result > error 
//console.log(f); result > 700
//////////value kahi bhi change kr skte ha var ki
// ek problem aur ha var k sathn scope ke andar cheeze andar ki ha 
//aur bahar ki cheeze bhar ki ha 
//ye execute nahi hone chahiye 



//  if (true) {
//       d = 50
//  }
// d = 70000
// console.log(d); result > 7000 ese bhi value change ho jati ha 

let g = 150
if (true) {
    let g = 250
    console.log("inner:", g)   //result > inner: 250   block scope main (g) ki value
}

//ek baat aur scope k annadr ki cheeze block scope hoti ha
//aur scope k bahar ki cheeze global scope
console.log(g); // result > 150  global scope main (g ) ki value


//browser k console pr scope alag ha aur node main scope alag ha 

//*******************************v22 scopelevel and mini hoisting***************
//remember chote bache bado se icecream le skte ha lekin
//lekin bade choto se nahi le skyte

// function one(){
//     const username = "javad"
//     function two() {
//         const website = "youtube"
//         console.log(username);
        
//     }
//     console.log(website);
//  two()    
// }
// one()//erro dega kyoki console.log(website) andar wale function ki value ha
// //aur vahi khatam ho jani chahiye 




// function one(){
//     const username = "javad"
//     function two() {
//         const website = "youtube"
//         console.log(username);
        
//     }
 
// }
// one() // ab execute hoga hi nahi kyoki anadar wala execute hi nai hua

function one(){
   const username = "javad"
     function two() {
         const website = "youtube"
         console.log(username);
        
     }
     
  two()    
 }
 one() // result > javad 



///////////////////for if */
// if (true) {
//      const username = "javad"
//      if(username==="javad"){
//         const website = " youtube"
//         console.log(username + website)
//      }
//      console.log(website);   //pehla error idhar ayega kyoki ye anadr ki value ha
     
//  }

//  console.log(username)


//  if (true) {
//      const username = "javad"
//      if(username==="javad"){
//         const website = " youtube"
//         console.log(username + website)
//      }
     
     
//  }

//  console.log(username) ab yaha error dikayega kykoi ye bhi andar hi execute hona ha



 if (true) {
     const username = "javad"
     if(username==="javad"){
        const website = " youtube"
        console.log(username + website)
     }
     
     
 }  //result = javad youtube

 //++++++++++++ interesting ++++++++++++//

 addone(5) 
 function addone(num){
    return num +1
 }                        //agar ese likhege to anser to nahi ayega lekin koi error 
 //bhi nahi ayegi

  

 addtwo(5)
 const addtwo = function(num){
    return num + 2
 }     //ab ye error dikhaye jab const k sth function use kia humne

 //yahi interesting cheez ha
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

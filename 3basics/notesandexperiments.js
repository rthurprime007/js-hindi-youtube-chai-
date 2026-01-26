//******************v19fuctions */
//BASIC OF FUNCTIONS
function maths(a,b){
     console.log(a+b);
     console.log(a-b);
     console.log(a/b);
     console.log(a==b);
     console.log(a%b);      
}

maths(10,5)   //result> 15
//                      5
//                      2
//                      false
//                      0

//*****************v20funcithobjectandarrays */
//example of linking object to a function
const partner = {
    id: "angela",
    id2: "mindi",
    id3: "dani"
}

function tinder(name){
    console.log(`i am planning on dating ${name.id} or ${name.id2} but not ${name.id3}`);
    
}

tinder(partner) //resul> i am planning on dating angela or mindi but not dani
//one more method we changed the values here
tinder({
    id: "sunny",
    id2:"Mia" ,
    id3 : "preeti"
})  //result> i am planning on dating sunny or Mia but not preeti
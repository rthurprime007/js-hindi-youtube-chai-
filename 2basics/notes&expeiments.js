//************************v14v15arrays**************************** */
const myarr = [1 , 2 ,3 ,4]
myarr.push(5 ,6)
console.log(myarr)  //resullt = [ 1, 2, 3, 4, 5, 6 ]

const myarr = [1 , 2 ,3 ,4]
myarr.push(5 ,6 , "goku")
console.log(myarr) //result =  [
//   1,      2,
//   3,      4,
//   5,      6,
//   'goku'
// ]
myarr.pop()
console.log(myarr); //result > [ 1, 2, 3, 4, 5, 6 ] matlab sari push ki values gayab ho jayegi



const myarr = [1 , 2 ,3 ,4]
myarr.unshift(7)

console.log(myarr); //result> [ 7, 1, 2, 3, 4 ]
myarr.pop()
console.log(myarr); //result> [ 7, 1, 2, 3,  ] is bar pop ne last vala hta dia 



const myarr = [1 , 2 ,3 ,4]
myarr.unshift("goku")

console.log(myarr); //result> [ goku, 1, 2, 3, 4 ]
myarr.shift()
console.log(myarr); //result> [ 1, 2, 3, 4 ]


const myarr = [1 , 2 ,3 ,4]
console.log(myarr.unshift("goku")) //result > 5   //interesting


const myarr = [1 , 2 ,3 ,4]

let newarr = myarr.join()

console.log(myarr);           //result> [ 1, 2, 3, 4 ]
console.log(newarr);           //result> 1,2,3,4
console.log(typeof myarr)       //result> object
console.log(typeof newarr)       //result> string

const myarr = ["javad", "ahmed", "arthur" , " prime"] 

//EXAMPLE = SLICE
const A = myarr.slice(1 , 3)  //SLICE LOGIC slice (start[will be included , end[will nnot be included]]
console.log("a:", A);                  //RESULT > a: [ 'ahmed', 'arthur' ]
console.log("a:", myarr.slice(0 , 3)); // RESULT > a: [ 'javad', 'ahmed', 'arthur' ] ISME CONTANT NAHI LIA
 
//EXAMPLE = SPLICE  //SPLICE 
//IF YOU WANT TO RETURN A DELETED ELEMENT IN ARRAY SPLICE(INDEX , DELETE)
//IF YOU WANT TO MODIFY AN ELEMENT IN ARRAY  SPLICE (INDEX , DELETE ,MODIFY)
//if introduced a const than it will return the value 

const B = myarr.splice(2,1) > RESULT> [ 'arthur' ]
const B = myarr.splice(2 , 0 , "RANI") //RESULT >b: [ 'javad', 'ahmed', 'RANI', 'arthur', ' prime' ]
const B = myarr.splice(2 , 1 , "RANI") //RESULT >b: [ 'javad', 'ahmed', 'RANI', ' prime' ]
const B = myarr.splice(2 , 0 , "RANI", "LAXMI") //RESULT>b: [ 'javad', 'ahmed', 'RANI', 'LAXMI', 'arthur', ' prime' ]
myarr.SPLICE() // THIS IS ALSO A METHOD





const greek = ["kratos", "ares", "zeus" , "athena"]
const norse = ["odin", "baldur" , "thor", "heimdal"]

const A = greek.push(norse)

//PUSH DOES TWO THINGS
//1.it adds elements to the original array
//2.it returns the new length of the array (not the array)
//3. i.e it has changed the original value
console.log(greek);  //result> [
                              //  'kratos',
                              //   'ares',
                              //   'zeus',
                             //  'athena',
                            // [ 'odin', 'baldur', 'thor', 'heimdal' ]
                             //   ]
console.log(A);      //result> 5



const greek = ["kratos", "ares", "zeus" , "athena"]
const norse = ["odin", "baldur" , "thor", "heimdal"]

const A = greek.unshift(norse)

console.log(greek);  //RESULT>  [ 'odin', 'baldur', 'thor', 'heimdal' ],
                              // 'kratos',
                              //'ares',
                              //'zeus',
                              //'athena'
                            //]
console.log(A); //RESULT> 5

//START OF ARRAY                                END OF ARRAY
 //unshift()                                     //push() 
//shift()                                        //pop

//note: i thought we could use slice to do the same thing as unshift and push
//      but the thing is splice does not effect the original value




////         
//includes()   "does this array contains this value"
//Array.isArray()  "is this an array"










//***************************v16objects */

const mysym =  Symbol(123)

const newobj = {
    name : "javad",
    [mysym] : "test"
}
console.log(mysym === newobj[mysym]) //result> false   //yaha pr bhi symbol same nahi ha

//example joining a key and value from outside
const run = {
    name:"javad",
    age: 27
}

run.email = "javvadahmed@gmail.com" // i think this will  be treated as (key and value) from inside
                                    // 
console.log(run);



//examle of joining object to a function
const allnewjs = {
    name: "javad",
    Age:27, 
    location: "meerut",
    email: "javadahmed@gmail.com",
    isloggedin : false,
    lastlogin : ["sunday" , "monday" ]
   }
 
   allnewjs.new = function(){
    console.log(`hello my name is ${this.name}
        ,i am ${this.Age} years old
        and my email is ${this.email}`)



   }
  
   console.log(allnewjs.new())



   //to call a nested object through [ ] notation
   const tinder ={
    id:"angela",
     age:42,
    
    id2 : { name:"mindi",
        age2:43,},
    
id3: "dani",
        age3: 43
    }
console.log(tinder["id2"]["name"]); //result > mindi

//**********************************v17v18objects2.js ***************/


   //EXAMPLE of nested objects
   const indiaschool = {
       upschool: {
        meerutschool : {
            westendroad : "dewan public school",
            bankstreet : "st. johns",
            bacchapark : "blossoms school",
            shivajiroad : "st thomas"
        }
       }
} 
console.log(indiaschool.upschool.meerutschool.bacchapark);




//combining objects
const obj1 = {game1:"call of duty" , game2: "gow" , game3: "pubg"}
const obj2 = {player1:"dynamo", player2:"arthur gaming" , player3:"deimos gaming"}

 console.log({...obj1 , ...obj2}); //result> {
 //                                            game1: 'call of duty',
 //                                             game2: 'gow',
  //                                           game3: 'pubg',
  //                                           player1: 'dynamo',
  //                                           player2: 'arthur gaming',
  //                                           player3: 'deimos gaming'
//                                              }

const obj3 = {...obj1 , ...obj2}
console.log(obj3); //result > {
//                             game1: 'call of duty',
//                             game2: 'gow',
//                             game3: 'pubg',
//                             player1: 'dynamo',
//                             player2: 'arthur gaming',
//                              player3: 'deimos gaming'
//                              }

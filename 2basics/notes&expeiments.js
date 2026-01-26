//************************v14arrays**************************** */
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

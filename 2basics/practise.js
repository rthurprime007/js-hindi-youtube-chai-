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

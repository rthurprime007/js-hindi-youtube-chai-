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
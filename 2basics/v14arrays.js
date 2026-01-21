//array


// parentheses = ()
// bracket = []
// curlybraces = {}


// array are resizeable    aur elements bhi add kr skte ha 
//shallow copy =  like heap memory
//deep copy = like stack memory

// there is list of methods of array on mdn

//agar browser pr jakr const number = [ 1 ,2 ,3 ,4]
//kro tp ptototype sekh skte 
//prototype kholne k baad ek aur prototype bhi dekh skte ha
//upar ki teen line abhi k lie im-portant nahi ha 

const myarr = [0 , 1 ,2 , 3 , 4 ,5 ]    //[ true , "javad"]  ye bhi array hi ha
const myhero = ['shaktiman' , "naagraj"]
const myarr2 = new Array(1 , 2 , 3 , 4)  // isme [] nahi lagate

// array methods

myarr.push(6)
//console.log(myarr) result [ 0 ,1 ,2 ,3 ,4 ,5 ,6 ] ye ek extra value jod dega 
//myarr.push(7)
//console.log result [ 0, 1 ,2 ,3 ,4 ,5 ,6 ,7] yha isne do value jod di

myarr.pop() // ye last value hta dega      push ke bab value ha [1 ,2 ,3 ,4 ,5 ,6 ] isme argument nahi dete
//console.log(myarr);  // result > [1 ,2 ,3 ,4 ,5]


myarr.unshift (9) // ye shru main array k 9 dal dega
//console.log(myarr)  // [9, 0 , 1 ,2 ,3 ,4 ,5 ]

myarr.shift() // ye jo 9 juda vo remove kr dega 
//console.log(myarr)  //[0 ,1 , 2 ,3 , 4 , 5]
 
//console.log(myarr.includes(9)) iska answer true ya false main ayega
// aur myarr ka typeoff bhi boolean ho gya

//console.log(myarr.indexOf(9)) // agar 9 na to result ayega -1
//console.log(myarr.indexOf(3)) // to iska result 3 ayega kyoki 3 index p 3 ha

 const newarr = myarr.join
 //console.log(newarr) //iska result ayega > 0,1,2,3,4,5 kyoki ye ab string main convert ho gya ha
 //console.log(typeof newarr); // ye ab string main ho gya
 

 


// remember 0(sabse pehla element) se shru hoga [0 , 1 , 2 ,3 ,4 ,5 ]  yani 
const myarr1 = myarr.slice(1,3) //result = [ 1 , 2]   (1(first elementjo 0 ha) , 3 (3 element tak aur vo inclue nahi hoga))


console.log(myarr1) //result> [1,2]      

console.log( "A", myarr)  //result > A = [0 , 1 ,2 ,3 ,4 , 5]

////very im-portan > slice original mrarr ko nahi badlega

//// ab use krenge  splice   ye range ko badal deta ha 

const myarr2 = myarr.splice(1 , 3)
console.log(myarr2)   //result = (1,2,3) (isme range include hoti ha)
console.log("C" , myarr); //result = c = [0 , 4 , 5]  isme original myarr change ho gya




 







//on browser (const myarr = [1 ,2 ,3 ,4]) will show prototype 

const marvel = ["ironman" , "hulk" , "vision"]
const dc = ["superman" , "batman" , "flash"]

//>marvel.push(dc)

//>console.log(marvel) //result > [ 'ironman', 'hulk', 'vision', [ 'superman', 'batman', 'flash' ] ]   so push just define dc as 
//as 4th element which is problematic 

//>console.log(marvel[3][2]); //result > flash  kroki [3] ka matlab ha 3 element (because it starts from 0)
//aur doosre [2] iska matlab 3 rd element main se 2nd element jo ha flash


//marvel.concat(dc) result > [ 'ironman', 'hulk', 'vision' ] ese directly do array jude nahi to ek constant lelo
const mymarvel = marvel.concat(dc)

//>console.log(mymarvel); // result >> [ 'ironman', 'hulk', 'vision', 'superman', 'batman', 'flash' ]  ab theek ha

//one more easier method = SPREAD
const allmarvel = [...marvel , ...dc]
 
//>console.log(allmarvel); // result >> [ 'ironman', 'hulk', 'vision', 'superman', 'batman', 'flash' ] same result and better syntax

const anotherarray = [1 , 2 ,3 ,[ 4 , 5 , 6] , 7 , [6 , [8 ,9]]] // array k andr array k andar array
//isko kese ek bnaye

const anotherarray1 = anotherarray.flat(1) // is bracket k andar ham kitne depth main 
//restlt chahiye 
// flat(infinite) > result > [ 1, 2, 3,  4, 5, 6 , 7,  6, 8, 9 ]
//flat(1) > [ 1, 2, 3, 4, 5, 6, 7, 6, [ 8, 9 ] ]      1 = 2 remember
//flat(2) > [ 1, 2, 3, 4, 5, 6, 7, 6,  8, 9  ]

//>console.log(anotherarray1);


//to check if something is an array
//console.log(Array.isarray("thor")) //result > false

// to convert to array like any string
//>console.log(Array.from("thor")) result > [ 't' , 'h' , 'o' , 'r']

//comole.log(Array.from({name: "thor"})) // result> [] because what is made into array is not defined
//interesting question for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of (score1 , score2 , score3))
//result = [100 , 200 , 300]
//yaha [of] ya (from) dono use kr skte ha lekin inka difference padh lio



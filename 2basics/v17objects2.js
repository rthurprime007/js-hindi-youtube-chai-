//const tinderuser = new Object() //singleton object result > {}
//const tinderuser = {} // non singlrton object  result > {}


const tinderuser = {}
tinderuser.id =  "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false
 
//>console.log(tinderuser);  result> { id: '123abc', name: 'sammy' }


//**************objects ka andar objects */
const regularuser = {
      fullname:{
        uerfullname:{
            firstname: "javad",
            lastname: "ahmed"
        }
      }                
}

//>console.log(regularuser.usrfullname); // . lagate hi list khul kr aa jaegi name , email age ki
                                       // result > undefined 
                                       // kyoki regularuser k baad fullname ha naki username

//>console.log(regularuser.fullname); //result > { uerfullname: { firstname: 'javad', lastname: 'ahmed' } }
//>console.log(regularuser.fullname.uerfullname);// for furthur nesting
//                                               //result > { firstname: 'javad', lastname: 'ahmed' }

// kahi bar hame pta nahi hota ki koi object ha bhi ya nahi kisi object k andar
// example > console.log(regulsuser.fullname?.userfullname.firstname) iska matlab fullname ha to theek
//rna koi baat nahi

//******************object combining */

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const objcombine = {obj1, obj2}; 
//>console.log(objcombine); //result > { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
                         // ye to same hua jese array main array
                         //aur ye theek se combine bhi nahi hua

const allobjcombine = Object.assign(obj1 , obj2)  
console.log(allobjcombine); //result> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
                            // ye combine to ho gya phir bhi ek cheez isme jodni ha
//>const allobjcombine = Object.assign({},obj1 , obj2)   //isme ye {} lagana zarri hota ha
//{} ye target hta ha aur 1:a ye hota ha sourse
//ye lagane se pakka ha result ek seprate object main hi ayega
//ye na lagane ka matlab ha ki sari objects ha vo obj1 main ja rahi ha 

/////ek aur methood
//spread wala 90 % yehi wala use hoga
const newmethod = {...obj1 , ...obj2};
//console.log(newmethod); result> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//*****************array main objects */
const user = [
    {id:1,
    email:"h@ymail.com"
    } ,

    {id:2,
    email:"Eymail.com"
    },

    {id:1,
    email: "Q@ymail.com"
    }


    
]

user[1].email // this means 1 array ke obect ka email

///from tinderuse line no.5
console.log(tinderuser); // result > { id: '123abc', name: 'sammy' }
console.log(Object.keys(tinderuser));  //result > ['id' , 'name']  ///very important
console.log(Object.values(tinderuser)); //result > [ '123abc', 'sammy' ]///very important
console.log(Object.entries(tinderuser)); //result > [ [ 'id', '123abc' ], [ 'name', 'sammy' ] ]
                                                    // coverts object to array


    ///////to find out whwether a value exist or not
    console.log(tinderuser.hasOwnProperty("name")); //result>true
    console.log(tinderuser.hasOwnProperty("gender")); //result>false
    
    
    
 // can see prototypes on console
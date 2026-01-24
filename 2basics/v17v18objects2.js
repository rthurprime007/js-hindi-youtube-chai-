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
// >console.log(tinderuser); // result > { id: '123abc', name: 'sammy' }
// > console.log(Object.keys(tinderuser));  //result > ['id' , 'name']  ///very important
// >console.log(Object.values(tinderuser)); //result > [ '123abc', 'sammy' ]///very important
// >console.log(Object.entries(tinderuser)); //result > [ [ 'id', '123abc' ], [ 'name', 'sammy' ] ]
//                                                     // coverts object to array


    ///////to find out whwether a value exist or not
    //>console.log(tinderuser.hasOwnProperty("name")); //result>true
    //>console.log(tinderuser.hasOwnProperty("gender")); //result>false
    
    
    
 // can see prototypes on console.log(tinderuser)


//************ video 18 object destructure and json */

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh"
};

//course.courseinstructor > ye baar baar console main dalna bohot sardard ha value extract krne k lie
//const {} = course > ye behtr ha aur zyadatar yahi use hota ha

//>const {courseinstructor} = course
//>console.log(courseinstructor); result > hitesh
 // ya courseinstructor bda lag raha ho to 

//const {courseinstructor: instructor} = course
//console.log(instructor)  >hitesh

//array ki bhi de structuing bhi hoti ha chota concept ha age btayega ye

//apn kam kisi aur k sar pr dalna API khe laya jatah ha
//menu card api ka ek documentation

//pehle api XML format aati ha lekin ab aati ha JSON format main
//json simple ek object hi ha lekin bina naam ka object

{
    "name": "hitesh"
    "coursename": "js in hindi"
    "price": "free"
}

// error ko ignore kro isme      name , coursename vagera bhi syntax main hoti ha


//JSON keval java script main hi nahi kahi jagah use hota ha
//kai jagah use hot ha
// java main to hum ise object bna denge aur values fatch krlenge

//api as a array ke form main bhi aati ha jiske andar object hote ha

[
    {},
    {},
    {}
]


//ek API ka respnsoe dekho  example from https://randomuser.me


{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }

//isko thoda tim dena padega samajne k lie
//ya phir   https://jsonformatter.org  pr jakr isko more readable bna skte ha

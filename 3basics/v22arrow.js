const user ={
    username : "javad",
    age : 27,

    welcomemessage:function(){
        //console.log(`${username} , welocome to website`); isme direct mian username nahi kr skta 
        console.log(`${this.username} , welocome to website`); //ye this lagana padega
                                                               // ye ab current context ko use krega
        
    }
}
user.welcomemessage()  //result > javad , welocome to website
user.username = "sam"
user.welcomemessage()  //result > sam , welocome to website



/////////////////ab this ka concept padenge
const newuser ={
    username : "javad",
    age : 27,

    welcomemessage:function(){
        
        console.log(`${this.username} , welocome to website`); 
        console.log(this); 
        
    }
}

newuser.welcomemessage()  
newuser.username = "sam"  //jab teno ko print kia result>   {
 newuser.welcomemessage()  
//                                                             username: 'javad',
//                                                              age: 27,
//                                                             welcomemessage: [Function: welcomemessage]
//                                                              }
//                                                              sam , welocome to website
//                                                              {
//                                                               username: 'sam',
 //                                                               age: 27,
 //                                                              welcomemessage: [Function: welcomemessage]
//                                                                }

//                                                                newuser.welcomemessage()  

//////explation   iska matlab (THIS)  current context ki baat krta ha


console.log(this); //result> {}   agar ese hi print kr denge bahae kahi to ye empty dikhayga
                                  // iska matlab koi current context ha hi nahi
                                  // ye  node main jo ham kr rahe ha yaha ye empty dikhayega
                                  // console pr yeh empty window object rahega //interview ques
                                  //  waha pr hum iske events bhi capture kr skte ha

 function chai (){
    console.log(this);
    
 }                            
 chai()      //result > pta na kya kya aagya
//  <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter],
//   navigator: [Getter]
// }


function doosrichai() {
    let username = "javad"
    console.log(this.username)
} 
doosrichai() //result > undefined  sir ka kehna ha ye jese object main kaam krega vese function 
                            // main kaam nahi krega
                            // ek experiment krio function mian object introduce krkr dekhiyo
// agar doosri tarah se function ko declare kre
const teesrichai = function(){
        let username = "javad"
        console.log(this.username);
        
}

teesrichai() //result = undefined    ese bhi answer same raha
//arrow function ese bnta ha isko bhi try krenge

const chotichai = () => {   //isko kehte ha arrow function
        let username = "javad"
        console.log(this.username);
}
chotichai()  //result = undefined

/////////////////ab krenge core arrow function
//() => {}      is ko kehte ha arrow function 
const addtwo = (num1 , num2) => {
    return num1 + num2
}

addtwo(3,4)// lekin ye ese call nahi hua
console.log(addtwo(3,4)); //result > 7

///////////////////implicit return    is methos main curly braces use nahi hote ha

const addthree = (num1 , num2 , num3) =>  num1 + num2 + num3
console.log(addthree(1,2,3)); //result> 6
const mixthree = (num1 , num2 , num3) => ( num1 + num2 + num3 )
console.log(addthree(1,2,3)); //result> 6 parnthese main pack krdo ( num1 + num2 + num3 ) same result
  

//curly braces main    return key likhna hi padega
//parenthesis main return key nahi lagana padega

//reactjs main bohot kaam ayega
const experiment = (num1 , num2) => {usernma: "javad"}  //call result > undefined
const experiment2 = (num1 , num2) => ({usernma: "javad"}) //call result> javad
 ///iska matlab agar retuurn nahi dena to parenthesis dena hi padega


//looping ka ek examole ye samajne k lie ki looping main kese kaam ayega
const myarray = [1 , 2 , 3 , 4 ,5]
myarray.forEach(() => {})



/////////////



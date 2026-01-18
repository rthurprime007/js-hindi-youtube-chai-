//is video main btaya gya ha ki strings ko no. mian change kese 
// example 99 to pehle hi no. ha agr ye "99" to ye string ho jayega
//isi ko convert krna ha hame number main 
//aur haann "99" hi convert hokr terminal main 99 dikayi dega
//lekin agar "99aba" kr dia to terminal main NaN dikhayega
//agar 99 ki jagah mene null likh dia to terminal main 0 dikhayega
//agar 99 ki jagah mene undefined likh dia to termianl main NaN 
//agar 99 ki jagah boolean value dali jese true to 1 ayega
//aur false pr 0
//aur agar string value ko convert krne ki koshish kri "javad
//to bhi NaN hi milega
let score = "99"
console.log(typeof score)// they both are same thing
console.log(typeof (score))

let kuchbhi = Number(score)
console.log(typeof kuchbhi)
console.log(kuchbhi)

let chacha = Boolean(kuchbhi)
console.log(chacha)

//for boolean
//any number,  any string , 1 it will give true
//khali" "  , 0 it will always give false


//agar humne kisi number ko string main conver krne ki koshish ki
let anyno = 89

let kratos = String(anyno)
console.log(kratos)
//isko agar run krenge to terminal
//lekin agar iska type dekhenge
//>console.log(typeof kratos)
//to iska type string hi ayega

//***************************operations******************************

let value = 3
let negvalue = -value
console.log(negvalue);

//console.log(2+2)
//console.log(2-2);
//console.log(2*2)
//console.log(2**3) 2 to the power3
//console.log(2/3) 2 divide by 3
//console.log(2%3) remainder

let str1 = "javad"
let str2 = " ahmed" //space is lie di taki terminal main javadahmed na aaye balki javad ahmed aaye
let str3 = str1 + str2 //is tarah strings ko bhi add kr skte ha

//>console.log(str3);

//console.log("1" + 2) output 12
//console.log(1 + "2") output 12
//console.log("1" + 2 + 2) output 122
//console.log(1 + 2 + "2") output 32

//console.log(+true) output 1 (but not recommended)
//console.log(+"") output 0 (but not recommended)

let num1, num2, num3
num1 = num2 = num3 = 2+2 //possible but not good for coding exam point of view good

let gamecounter = 100
++gamecounter
//console.log(gamecounter) output 101

gamecounter++
//console.log(gamecounter) output 101
//so whats the difference in prefix and postfix
//study for it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)


//also study (https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion)



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
console.log(typeof kratos)
//to iska type string hi ayega
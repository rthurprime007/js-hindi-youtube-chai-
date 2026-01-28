// Immediately Invoked Expressions  (IIFE)
//hume funcion ko agar immediately invoke krana ha 
//lekin jaldi invoke kyo krana ha 
//kai br ham kuch files likhte ha jisme database connection ha 
//ye jab kam atti ha jese koi application start hoti ha 
//hum tabhi chahenge ki humara database connection start ho jae
// aur application jaldi start ho jae
//ya global scope se nahi chahte ki andar ke scope ko vo
// pollute na kare

// function chai (){
// console.log('DB CONNECTED');
// }
// chai () ye to basic hota hi ha



//function pr parenthesis lga do jese pehle humne curly braces ko parenthesis main lia tha
//aur ek parenthesis bahar lelo 
//>(function chai (){
//>console.log('DB CONNECTED')
//>})() //ye () call krne ka tarika ha result> DB CONNECTED

//()()  <= iife

//()

(function doosrichai(){                    //ye example ha name iife ka  iska nam ha
    console.log('i like dell laptops')
})();

//dosra function 
(  () =>{                                  //ye example ha only iffe ka   iska nam nahi ha
    console.log('i like hp laptops'); 
    
} )();

// warning agar upar wale function main   ;    nahi lagaya () ke baad 
//to ye dono main se koi sa bhi function run nahi hoga
//===========> interview question   do IIFE kese run kre
//result  >  i like dell laptops   < upar wale function ka
//        >  i like hp laptop neeche wale function ka < neeche wale function ka



((name) => {                              //ye bhi only iife ha
    console.log(`my name is ${name}`);
    
} ) ('javad'); //result> my name is javad
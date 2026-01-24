//jo bhi apne code likha ha usko ek package main bnd krna
//isko FUNCTION kehte ha
 
function saymyname(){
    console.log("j");
    console.log("a");
    console.log("v");
    console.log("a");
    console.log("d");
}

saymyname()    //ye function ka ha refrence  execute krane k lie   () lagana padega ab run kro
               // result > j
//                         a
//                         v
//                         a
//                         d

//function saymyname(this is parameter){}
//saymyname(the space between this parenthesis is called as argumnt) 

// agar saymyname main () na lagao to run hone p kuch nahi ayega

function addtwonumbers(number1,number2){ //isme number ka type dene ki need nahi ha
        console.log(number1 + number2)
}

//>addtwonumbers() //result > NaN kyoki isko koi argument dia hi nahi  
//>addtwonumbers(3,4) //result > 7
//>addtwonumbers(3, "4") // result > 34
//>addtwonumbers(3 , "a") 

//>const result = addtwonumbers(3,5) //run krte hi result aya> 8 iska matlab hum isko
//variable main bhi le skte ha

//>console.log (result) //result > undefined    dono tarah se run kr skte ha
//>console.log ("myresult:", result) //result > myresult: undefined

//lekin ye undefined aya kyu
//iska sahi loic mujhe samaj nahi aya
//andar console kia ha to anadar ki value ayegi
//console print krne ka matlab ye nahi ki function vo value retuurn 
//return ek concept ha aur console ek print ha bas     ye sir ne kaha
 
//isko krne ke 2 se 3 tarike ha

function alladdtwonumbers(number1,number2){ 
        let result = number1 + number2 // ek variable yaha define krte ha
        return result    // ye lgane se value bahar console pr aa jayegi 
                              //aur iske bad function main jo bhi likha jayega vo 
                              //print nahi hoga  
}
 
//>const result =alladdtwonumbers(3,5)
//>console.log("mynewresul:" , result); // result > mynewresul: 8 //lekin ye ab bhi print nahi ha
                                    // kyoki console kia hi nahi ha

// function alladdtwonumbers(number1,number2){ 
//         let result = number1 + number2 // ek variable yaha define krte ha
//         return result    
//         console.log("javad") ye print hoga hi nahi return result k baad
// }

// function alladdtwonumbers(number1,number2){ 
//         let result = number1 + number2 // ek variable yaha define krte ha
//          console.log("javad") ye print hoga 
//             return result    
//         
// }

function alladdtwonumbers(number1,number2){ 
        
        return number1 + number2 //ye direct method ha    
}
//>const result = alladdtwonumbers(3,5)
//>console.log("myresult:" , result); result>myresult: 8 


//ab manlo humne ek function k last main return krdi ho to
//usko print kese kraye ya to return se pehle console lagao 
//ya phir function k baad

function loginusermessage(username){
    return `${username} just logged in ` 
}

//>console.log(loginusermessage("javad")) //result > javad just logged in
//>console.log(loginusermessage("")) //result >  just logged in 
//>console.log(loginusermessage()) //result >  undefined   null nai aata //interview question


//************ek if ka example lets ha */
//********** kisi ne username na dala ho to kya ho */
function newloginusermessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return     //ye dalte hi neeche ki funcyion ki line run hi nahi hogi
    }
    return `${username} just logged in ` 


}

//>newloginusermessage() //result > please enter a username
//>console.log(newloginusermessage() );  //result: >please enter a username
                                    //undefined


///////////////one more mehod which suits profesiionals

function allnewloginusermessage(username){
    if(!username){      // ye exclamation shayad cheeze ulti krta true ko false aur false ko true iska concept if else main padenge
        console.log("please enter a username")
        return     //ye dalte hi neeche ki funcyion ki line run hi nahi hogi
    }
    return `${username} just logged in ` 

}

//>console.log(allnewloginusermessage());



function allallnewloginusermessage(username = "sam"){ //agar ye value define krdi to sara (if) ignore ho jayega
    if(!username){      // ye exclamation shayad cheeze ulti krta true ko false aur false ko true iska concept if else main padenge
        console.log("please enter a username")
        return     //ye dalte hi neeche ki funcyion ki line run hi nahi hogi
    }
    return `${username} just logged in ` 

}
console.log(allallnewloginusermessage());   //result> sam just logged in 
console.log(allallnewloginusermessage("javad"));   //result> javad just logged in 
                                                // ye value override bhi ho jayegi


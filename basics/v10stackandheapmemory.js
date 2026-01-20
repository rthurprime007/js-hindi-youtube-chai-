//stack memory is used by primitive data set
//heap memory is used by non primiotive dataset

let aname = "javad"     /
        
let anothername = aname                
anothername = "arthur"

console.log(aname)
console.log(anothername)
//ye string value yani (primitive) jo ki stack value main jata ha
//isme agar anothername = aname kia ha to iska matlab (anothername) 
// ko (aname) ki copy value mili ha to phir terminal main ye "javad"
//show krega lekin agar (anothername) ko ek original vale dedo to 
//termianal main vo "arthur" show krega





let rthur = {                    // ye object ha yani non primitive
    email: "artur@hotmail.com", // yaha comma zaruri ha vrna (upi)error show 
    upi: "art@ybl"
}
 
let javad = rthur

javad.email = "javad@gmail" //object ka data ese ho point krte ha (.) lga kr
 
console.log(rthur.email)
console.log(javad.email)

//jo result hoga vo dono console main result (javad@gmail)
//vo is lie kyoki (nonprimitive) heap memory main jate
//jaha agar value badlenge to original value bhi change ho jati 

// isko deep main samajhne k lie ek baar video dekh lio

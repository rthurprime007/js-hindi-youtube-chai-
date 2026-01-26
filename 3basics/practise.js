const partner = {
    id: "angela",
    id2: "mindi",
    id3: "dani"
}

function tinder(name){
    console.log(`i am planning on dating ${name.id} or ${name.id2} but not ${name.id3}`);
    
}
//one more method we changed the values here
tinder({
    id: "sunny",
    id2:"Mia" ,
    id3 : "preeti"
})  //result> i am planning on dating sunny or Mia but not preeti
//>const name = "javad"
//>const born = 1998

//>console.log(name + born + "value") //lekin ye method theek nahi ha 

// ek method hota ha directly variable  likhna console.log( `  ${} `)  iske andar

//>console.log (`hello my name is ${name} and i was born on ${born}`)

//result > hello my name is javad and i was born on 1998

//one more method to call a string const gamename = new String('callofduty')

//new concept

const gamename = new String('callofduty')
console.log(gamename[0]);
//iska result ayega (c) is tarah hum key place dekh skte ha
//keyplace ko dekhne k lie hum browser console pr ja skte ka
//iska screenshot dekhlena 

//prototype ko acces krne k lie
console.log(gamename.__proto__) // (.) dalte hi prototype khul kr aajate ha prototype age video main btayegaye ki yaha se bhiu protype ko acces kr skte ha aur browser main dall do waha se bhi prototype mil jayenge screenshot dekhlena 

console.log(gamename.length) //shayad length prototype nahi ha
console.log(gamename.toUpperCase()) //touppercase is a prototype aur
//iska result aya CALLOFDUTY aur ha agar touupercase k aage () nahii lagaya
// to result ayga [Functiom: toUpperCase]
//aur ek baat aur ORIGINAL VALUE cahnge nahi hui ha 
//stack memory ki wajah se
console.log(gamename.charAt(5)); // 5 konsa characte ha result f
console.log(gamename.indexOf("o")) // o pr konsa no. ha  result 4

//sabse aan ha prototype padne ka ki console pr dekheiye 
//interview k lie prototype ki ek marticle bna le

const newstring = gamename.substring(0 , 4)  // 0 ka matlab c se shru krna anur 4 ka matlab shru ki char character
console.log(newstring)   // result > call

const anotherstring = gamename.slice(-9, 4) // -ve ka matlab piche se shru krna
console.log(anotherstring) //result > all isko study kr


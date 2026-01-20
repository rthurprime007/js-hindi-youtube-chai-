let mydate = new Date()
//>console.log(mydate)  // result > 2026-01-20T06:50:40.423Z    samaj hi nahi aa raha 
//>console .log (mydate.toString())  //result> Tue Jan 20 2026 06:53:09 GMT+0000   more readable
//>console .log (mydate.toISOString()) //result> 2026-01-20T06:55:46.329Z
//>console .log (mydate.toJSON()) //result> 2026-01-20T06:57:52.885Z
//>console .log (mydate.toLocaleString()) //result> 1/20/2026, 6:58:52 AM
//>console .log (mydate.toLocaleTimeString()) //result> 7:00:16 AM

console.log(typeof mydate)   //  result > object

let mycreatedDate = new Date(2023 , 0 , 23)// java main month 0 se shru hota ha lekin agar is ("2023-01-14") (yyyy-mm-dd) format main hoga to month main 01 lagega
console .log (mycreatedDate.toDateString())//result> Mon Jan 23 2023

let othertime = new Date(2023 , 0 , 23 , 5 , 3)
console.log(othertime.toLocaleString()) //result> 1/23/2023, 5:03:00 AM

let anytime = new Date("01-14-2023") //indian time (dd-mm- yyyy)
console.log(anytime.toLocaleString())   // result> 1/14/2023, 12:00:00 AM


//time stamp example > who is the fastst in the poll

let mytimestamp = Date.now()   //date.noe for time stamp
console.log(mytimestamp) // rsult > 1768894041829     1 jan 1970 se ab tak k mili second
console.log(mycreatedDate.getTime()) //result > 1674432000000 ab up wali aur ye yali values ko compare kr skte ha

//second main abtak ki values dekhne k lie
console.log(Date.now()/1000)  //result> 1768894514.737
console.log(Math.floor(Date.now()/1000)) //result> 1768894621  hamerha (floor ya round loo) ceil mat lena

let brandnewdate = new Date
//AB YE bilkul aajki info dega jismain bhot sari useless cheezain hongi

console.log(brandnewdate.getHours()) //  (.)   dabate ho options khul ayenge getmonth,gethours etc)
//result > 7

//developes kese ise banate ha 
//`${brandnewdate.getTime}` is today's time

//interesting thing
//brandnewdate.toLocaleString() is bracket ke andar hum object define kr skte ha 
brandnewdate.toLocaleString('default',{
    weekday:"long",//control space dbakar properties slect krl jese maine weekday lia phir : dbark " to aur optios aata ha maine "long" lia
    day:"numeric"
      
})





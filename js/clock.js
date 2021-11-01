function callName(){
const name= prompt("Adinizi Giriniz : ")
document.getElementById("myName").innerHTML = name
}

function timer(){
    let today= new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let day = today.getDay();

    
    if(day==1)  {day="Pazartesi"}
    else if (day==2) {day="Salı"}
    else if (day==3) {day="Çarşamba"}
    else if (day==4) {day="Perşembe"}
    else if (day==5) {day="Cuma"}
    else if (day==6) {day="Cumartesi"}
    else if (day==7) {day="Pazar"}
var showTime =`${hours}:${minutes}:${seconds} ${day}` 
document.getElementById("myClock").innerHTML= showTime;
document.getElementById("myClock").textContent= showTime;

setTimeout(timer, 1000);
}


callName();
timer();



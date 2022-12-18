const element = document.getElementById("demo");
const element1 =document.querySelector("timerover")

let compareDate = new Date()
compareDate.setSeconds(compareDate.getSeconds() + 12);


let timer = setInterval(() => {
    updateTimer(compareDate);
}, 1000);

function updateTimer(toDate){
let now = new Date();
let difference = toDate.getTime() - now.getTime()

if(difference <= 0) {
    clearInterval(timer);
    return false
}
let seconds = Math.floor(difference / 1000)
let minutes =Math.floor(seconds / 60)
let hourse = Math.floor(minutes / 60)
let days = Math.floor(hourse / 24)

hourse %= 24;
minutes %= 60;
seconds %= 60;

document.getElementById("days").innerHTML = days
document.getElementById("houres").innerHTML = hourse
document.getElementById("minutes").innerHTML = minutes
document.getElementById("seconds").innerHTML = seconds

if(seconds == 0){
element.remove();
document.getElementById("timerover").style.display = "block";
console.log("Timer Over");

}

}




setInterval(countdown= () => {
    const startdate=new Date();
console.log(startdate)
let input=document.querySelectorAll("input");

const enddate=new Date(2023,9,24);
document.getElementById("date").innerText=enddate;

const year=enddate.getFullYear()-startdate.getFullYear();
console.log(year);

const date=enddate.getDate()-startdate.getDate();
console.log(date);

const month=enddate.getMonth()-startdate.getMonth();
console.log(month);

const hours=24-startdate.getHours();
console.log(hours);

const minutes=60-startdate.getMinutes();
console.log(minutes);

const seconds=60-startdate.getSeconds();
console.log(seconds);

input[0].value=Math.floor(year);
input[1].value=Math.floor(month);
input[2].value=Math.floor(date);
input[3].value=Math.abs(hours);
input[4].value=Math.abs(minutes);
input[5].value=Math.abs(seconds);
}, 1000);








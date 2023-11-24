generate = () =>{
const random=Math.random()                      //this will generate a random number
const code=Math.floor(random*16777215);         // this will give a number which will give hex code for colour
const colour="#"+code.toString(16)               // this will give the hex colour code
console.log(code,colour)
document.getElementById("main").style.backgroundColor=colour;
document.querySelector("span").innerText=colour

navigator.clipboard.writeText(colour)
}

generate();             //This is the initial call
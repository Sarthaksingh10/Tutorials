const uppercase="ABCDEFGHIJKLMNOPQRTSUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="`!@#$%^&*()_+/";

const passbox=document.getElementById("passwordbox");
const passlength=document.getElementById("length");
const upperinput=document.getElementById("Uppercase");
const lowerinput=document.getElementById('lowercase');
const numinput=document.getElementById("Number");
const symbolinput=document.getElementById("Symbol");

const getrandomdata = ( dataset) =>{
    return dataset [Math.floor(Math.random()*dataset.length)]
}

const generatepassword = (password = "") => {
    if (upperinput.checked) {
        password+=getrandomdata(uppercase)
    }
    if (lowerinput.checked) {
        password+=getrandomdata(lowercase)
    }
    if (numinput.checked) {
        password+=getrandomdata(number)
    }
    if (symbolinput.checked) {
        password+=getrandomdata(symbol)
    }  

    if (password.length < passlength.value) {
        return generatepassword(password)
    }

    passbox.innerText = truncateString(password, passlength.value);
}

generatepassword()

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
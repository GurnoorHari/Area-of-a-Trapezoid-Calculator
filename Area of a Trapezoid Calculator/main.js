document.getElementById("btn").addEventListener('click', CALCULATE)


function CALCULATE(){

let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let num3 = Number(document.getElementById("num3").value);
let num4 = num1 + num2;
let num5 = num4 * num3;
let num6 = num5 * 0.5

document.getElementById("output").innerHTML = num6;
}


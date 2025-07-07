let firstNumber=document.getElementById("first-number");
let secondNumber=document.getElementById("second-number");
let result=document.getElementById("output");
let operator=document.getElementById("operator");


function addFunc() {
    let temp = `${Number(firstNumber.value)+Number(secondNumber.value)}`;
    result.innerHTML = `${temp}`;
    answerColor(temp);
    operator.innerHTML = `+`;
}

function subFunc() {
    let temp = `${Number(firstNumber.value)-Number(secondNumber.value)}`;
    result.innerHTML = `${temp}`;
    answerColor(temp);
}

function multFunc() {
    let temp = `${Number(firstNumber.value)*Number(secondNumber.value)}`;
    result.innerHTML = `${temp}`;
    answerColor(temp);
}

function divFunc() {
    let temp = `${Number(firstNumber.value)/Number(secondNumber.value)}`;
    result.innerHTML = `${temp}`;
    answerColor(temp);
}

function powFunc() {
    let temp = Number(firstNumber.value);
    for (let i = 1; i < Number(secondNumber.value); i++)
        temp *= Number(firstNumber.value);
    result.innerHTML = `${temp}`;
    answerColor(temp);

}

function clearFunc() {
    firstNumber.value=``;
    secondNumber.value=``;
    result.innerHTML=``;
    document.getElementById("output").style.color="black";
}

function answerColor(result) {
    if (Number(result) < 0) {
        document.getElementById("output").style.color="red";
    }
    else if (Number(result) > 0) {
        document.getElementById("output").style.color="green";
    }
    else {
        document.getElementById("output").style.color="black";
    }

}
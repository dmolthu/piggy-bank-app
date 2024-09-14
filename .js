let balance = 0;

//Adds the specified value to the balance
const one = document.getElementById('one').onclick = function (){
    balance += 1;
    document.getElementById('balance').innerHTML = balance;
}
const five = document.getElementById('five').onclick = function (){
    balance += 5;
    document.getElementById('balance').innerHTML = balance;
}
const ten = document.getElementById('ten').onclick = function (){
    balance += 10;
    document.getElementById('balance').innerHTML = balance;
}
const twenty = document.getElementById('twenty').onclick = function (){
    balance += 20;
    document.getElementById('balance').innerHTML = balance;
}
const fifty = document.getElementById('fifty').onclick = function (){
    balance += 50;
    document.getElementById('balance').innerHTML = balance;
}
const oneHundred = document.getElementById('oneHundred').onclick = function (){
    balance += 100;
    document.getElementById('balance').innerHTML = balance;
}

//Allowes the user to withdrawel money
let w = document.getElementById('w').onclick = function () {
    let input = parseInt(prompt("How much would you like to withdrawel?", "0"), 0);

//User has to input a valid number, if not they will be prompted to enter a valid number
    if ( /^[0-9,]+$/.test(input)) {
        console.log('pass');
    }
    else {
        while (Number.isNaN(input) || input === null || input === ''){
            input = parseInt(prompt("Enter a valid number",'0'), 0)
        }
        console.log("fail");
    }

//Reminds the user that once they withdrawel too much, their balance will be negative
    if (balance < 0) {
        alert("You are in debt!");
    }
    else {
        alert("withdrawel complete")
    }

    balance -= input;
    document.getElementById('balance').innerHTML = balance;
}

//Clears balance
const reset = document.getElementById('reset').onclick = function () {
    balance = 0;
    document.getElementById('balance').innerHTML = balance;

}

//Allows user to input a specific amount of money and calculate budgets, based on 50/30/20 rule
let budget = document.getElementById('budget').onclick = function () {
    let moneyAmount = parseInt(prompt("Input desired amount to be calculated","0"), 0);
    let needs = moneyAmount * .5;
    let wants = moneyAmount * .3;
    let savings = moneyAmount * .2;

    if ( /^[0-9,]+$/.test(moneyAmount)) {
        alert(`Your needs are: ${needs}, your wants are: ${wants}, your savings are: ${savings}`);
        console.log('pass');
    }
    else if (Number.isNaN(moneyAmount) || moneyAmount === null || moneyAmount === '') {
        alert("Invalid number, program cancelled");
        console.log("fail");
    }
}

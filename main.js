//usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    ERU: 0.93,
    KPW: 135,
    INR: 83.35,
    PKR: 277.5,
    TRY: 32.49,
    SAR: 3.75,
    JPY: 156.9,
    ITL: 1807.21
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter your from currency",
        type: "list",
        choices: ['USD', 'ERU', 'KPW', 'INR', 'PKR', 'TRY', 'SAR', 'JPY', 'ITL']
    },
    {
        name: "to",
        message: "Enter your to currency",
        type: "list",
        choices: ['USD', 'ERU', 'KPW', 'INR', 'PKR', 'TRY', 'SAR', 'JPY', 'ITL']
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amountAns = (answer.amount);
let baseAmount = amountAns / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);

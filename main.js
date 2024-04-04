import inquirer from "inquirer";
console.log("Welcome to ATM Machine");
let myPin = 1234;
let myBalance = 50000;
let checkPin = await inquirer.prompt([
    {
        name: "userInput",
        message: "Enter your PIN number: ",
        type: Number,
    },
]);
// Verifying Pin
if (checkPin.userInput == myPin) {
    console.log("Correct pin");
    let options = await inquirer.prompt([
        {
            name: "operation",
            message: "Select your operation.",
            type: "list",
            choices: ["Fast Cash", "Withdraw", "Check Balance", "Input Cash"],
        },
    ]);
    //  fast cash
    if (options.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "fast",
                message: "Select your Amount.",
                type: "list",
                choices: ["1000", "2000", "3000", "4000", "5000"],
            },
        ]);
        if (fastCash.fast == "1000") {
            myBalance -= 1000;
            console.log(`Your current balance is: ${myBalance}`);
        }
        else if (fastCash.fast == 2000) {
            myBalance -= 2000;
            console.log(`Your current balance is: ${myBalance}`);
        }
        else if (fastCash.fast == 3000) {
            myBalance -= 3000;
            console.log(`Your current balance is: ${myBalance}`);
        }
        else if (fastCash.fast == 4000) {
            myBalance -= 4000;
            console.log(`Your current balance is: ${myBalance}`);
        }
        else if (fastCash.fast == 5000) {
            myBalance -= 5000;
            console.log(`Your current balance is: ${myBalance}`);
        }
    }
    //  WithdrawCash
    if (options.operation === "Withdraw") {
        let WithdrawCash = await inquirer.prompt([
            {
                name: "cashAmount",
                message: "Enter your Amount: ",
                type: "number",
            },
        ]);
        if (WithdrawCash.cashAmount > myBalance) {
            console.log("Out of balance");
        }
        else {
            myBalance -= WithdrawCash.cashAmount;
            console.log(`Your current balance is: ${myBalance}`);
        }
    }
    //   check balance
    if (options.operation === "Check Balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    //   Cash Input
    if (options.operation === "Input Cash") {
        let inputAmount = await inquirer.prompt([
            {
                name: "cashInput",
                message: "Enter your Amount: ",
                type: "number",
            },
        ]);
        myBalance += inputAmount.cashInput;
        console.log(`Your current balance is: ${myBalance}`);
    }
    // Incorrect Pin
}
else {
    console.log("Incorrect pin");
}

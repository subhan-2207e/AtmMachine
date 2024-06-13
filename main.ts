import inquirer from "inquirer";
import chalk from "chalk";

let Balance = 5000
let MyPin = 1234

console.log("=".repeat(50))
console.log(chalk.bold.blue("\t Wellcome to Subhankhan Atm-Machine"))
console.log("=".repeat(50))


let PinAnswer = await inquirer.prompt([
    {
        name:"pin",
        type:"number",
        message:chalk.yellow("Enter your pin code:-"),
    },
]);

if(PinAnswer.pin === MyPin){
   console.log(chalk.green("\n Correct pin Login Successfully \n"))
//    console.log(`Current Account Balance ${Balance}`)


   let operationAns = await inquirer.prompt([
      {
        name:"operation",
        type:"list",
        message:"Select an operator",
        choices:["Withdraw Amount","Check Balance"],
      },
   ]);

   if (operationAns.operation === "Withdraw Amount") {

    let withdrawAns = await inquirer.prompt([
        {
            name:"Withdraw",
            type:"list",
            message:"Enter a withdraw method",
            choices:["Fast Cash","Enter Amount"],
        },
    ]);
    if (withdrawAns.Withdraw === "Fast Cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name:"Fastcash",
                type:"list",
                message:"Enter Amount",
                choices:[1000,2000,3000,4000,5000,10000],
            },
        ]);
        if (fastcashAns.Fastcash > Balance) {
            console.log(chalk.red("Insufficient Balance"))
        }
        else{
            Balance -= fastcashAns.Fastcash
            console.log(chalk.green(`${fastcashAns.Fastcash} Withdraw SuccessFully !`))
            console.log(chalk.green(`Your Remaining Balance is : ${Balance}`))
        }
    }

   else if (withdrawAns.Withdraw === "Enter Amount") {

        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                type:"Number",
                message:"Enter the amount of withdraw",
            },
        ]);
        if (operationAns.amount < Balance) {
            console.log(chalk.red("Insufficient Balance"))
        }
        else{
            Balance -=amountAns.amount
            console.log(chalk.green(`${amountAns.amount} Withdraw Successfully`))
            console.log(`Your Remaining Balance is :${Balance}`)
    
        }
       }
    }
   else if (operationAns.operation === "Check Balance"){
       console.log(chalk.green(`Your account Balance is: ${Balance}`))
   }
}
else{
    console.log(chalk.red("\n Pin Inncorrect , Try again"))
}









let accName = document.getElementById("account-name");
let depositAmount = document.getElementById("deposit");
let outputBox = document.getElementById("output");
let createAccountBtn = document.getElementById("create-new-acc-btn");
let depositBtn = document.getElementById("deposit-btn");
let debitBtn = document.getElementById("debit-btn");

// localStorage.clear();

class BankAccount {
    #accName;
    #accInitDeposit;
    static accountInfoList = [];

    constructor(name, amount){
        this.#accName = name;
        this.#accInitDeposit = amount;
    }

    get accName(){
        return this.#accName
    }

    get accInitDeposit(){
        return this.#accInitDeposit
    }

    createAccount(){
        const name = accName.value;
        const amount = depositAmount.value;
        if(String(name).trim() == "" || amount <= 0) return;
        const acc = new BankAccount(name, amount);
        BankAccount.accountInfoList.push(acc);
        BankAccount.accountInfoList.forEach((acc, i)=>{
            localStorage.setItem("Bank Account " + (i+1), [acc.#accName, acc.#accInitDeposit]);
        })
        this.displayAccounts();
    }

    displayAccounts(){
        outputBox.value = "";
        BankAccount.accountInfoList.forEach((acc)=>{
            outputBox.value += `Account Name: ${acc.#accName}, Balance: ${acc.#accInitDeposit} \n`;
        })
        accName.value = "";
        depositAmount.value = "";
    }
    
}

createAccountBtn.onclick = () => {
    const bankAccount = new BankAccount();
    bankAccount.createAccount();
}

depositBtn.onclick = () => {
    window.location.assign("./deposit-or-debit/actionPage.html?action=deposit");
}

debitBtn.onclick = () => {
    window.location.assign("./deposit-or-debit/actionPage.html?action=debit");
}

const init = () => {
    let valueArray = "";

    if(localStorage.length > 0){
        for (let i = 1; i <= localStorage.length; i++) {
            valueArray = localStorage.getItem("Bank Account " + i);
            let accountType = valueArray.split(',')[0];
            let existingAmount = valueArray.split(',')[1];

            outputBox.value += `Account Name: ${accountType}, Balance: ${existingAmount} \n`;
        }
    }
}

init();

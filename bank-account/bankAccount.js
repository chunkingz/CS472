let accName = document.getElementById("account-name");
let depositAmount = document.getElementById("deposit");
let outputBox = document.getElementById("output");
let createAccountBtn = document.getElementById("create-new-acc-btn");
let depositBtn = document.getElementById("deposit-btn");
let debitBtn = document.getElementById("debit-btn");

let accountInfoList2 = [];

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

        let accountsArray = JSON.parse(localStorage.getItem("Bank Accounts")); 

        if(accountInfoList2.length == 0 && accountsArray != null) {
            // incase page was reloaded, and the array becomes empty, run this.
            for (let i = 0; i < accountsArray.length; i++) {
                accountInfoList2.push(accountsArray[i]);
            }
            accountInfoList2.push({name, amount});
            localStorage.setItem("Bank Accounts", JSON.stringify(accountInfoList2));
        } else {
            accountInfoList2.push({name, amount});
            localStorage.setItem("Bank Accounts", JSON.stringify(accountInfoList2));
        }
        init();
    }

}

const init = () => {
    outputBox.value = "";

    if(localStorage.length > 0){
        let accountsArray = JSON.parse(localStorage.getItem("Bank Accounts"));  
        if(accountsArray.length > 0){      
            for (let i = 0; i < accountsArray.length; i++) {
                let accountType = accountsArray[i].name;
                let existingAmount = accountsArray[i].amount;
                outputBox.value += `Account Name: ${accountType}, Balance: ${existingAmount} \n`;
            }
        }
    }
    accName.value = "";
    depositAmount.value = "";
}

init();

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



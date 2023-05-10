let actionTypeHeader = document.getElementById("actionType");
let depositLabel = document.getElementById("deposit-label");
let accountNameDropdown = document.getElementById("account-name-dropdown");
let submitBtn = document.getElementById("submit-btn");
let amountInput = document.getElementById("amountInput");

const urlParams = new URLSearchParams(window.location.search);
const actionParam = urlParams.get('action');
let accountType = [];
let existingAmount = [];


const populateDropdown = () => {

    if(localStorage.length > 0){
        let accountsArray = JSON.parse(localStorage.getItem("Bank Accounts"));        
        for (let i = 0; i < accountsArray.length; i++) {
            accountType.push(accountsArray[i].name);
            existingAmount.push(accountsArray[i].amount);
        }
    }

    for(let i = 0; i < accountType.length; i++) {
        let opt = accountType[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        accountNameDropdown.appendChild(el);
    }
}

const getQueryParam = () => {
    actionTypeHeader.innerHTML = actionParam.toUpperCase();
    depositLabel.innerHTML = actionParam + " amount";
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.boxShadow = "none";
    populateDropdown();
}

getQueryParam();


accountNameDropdown.onchange = () => {
    if(accountNameDropdown.selectedIndex <= 0) {
        // invalid
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = "gray";
        submitBtn.style.boxShadow = "none";
    } else {
        // valid
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "rgb(241, 232, 50)";
        submitBtn.style.boxShadow = "5px 7px 10px blue";
        submitBtn.style.transitionDuration = "0.5s";
    }
}

submitBtn.onclick = () => {
    if(actionParam == "deposit"){
        let accountInfoList2 = [];
        const index = accountNameDropdown.selectedIndex-1;

        if(amountInput.value == "" || parseFloat(amountInput.value) <= 0) {
            alert("The amount is too low, increase it and try again");
            return;
        }

        existingAmount[index] = (parseFloat(existingAmount[index]) + parseFloat(amountInput.value)).toString();


        for (let i = 0; i < accountType.length; i++) {
            let name = accountType[i];
            let amount = existingAmount[i];
            accountInfoList2.push({name, amount});
        }
        
        localStorage.setItem("Bank Accounts", JSON.stringify(accountInfoList2));

        window.location.assign("../index.html");


    } else if(actionParam == "debit"){
        let accountInfoList2 = [];
        const index = accountNameDropdown.selectedIndex-1;

        if(amountInput.value == "" || parseFloat(amountInput.value) > existingAmount[index]) {
            alert("The amount is too high, reduce it and try again");
            return;
        }

        existingAmount[index] = (parseFloat(existingAmount[index]) - parseFloat(amountInput.value)).toString();


        for (let i = 0; i < accountType.length; i++) {
            let name = accountType[i];
            let amount = existingAmount[i];
            accountInfoList2.push({name, amount});
        }
        
        localStorage.setItem("Bank Accounts", JSON.stringify(accountInfoList2));

        window.location.assign("../index.html");

    } else {
        console.log("invalid action");
    }
}

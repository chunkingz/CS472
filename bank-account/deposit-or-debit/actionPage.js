let actionTypeHeader = document.getElementById("actionType");
let depositLabel = document.getElementById("deposit-label");
let accountNameDropdown = document.getElementById("account-name-dropdown");
let submitBtn = document.getElementById("submit-btn");
let amountInput = document.getElementById("amountInput");

const urlParams = new URLSearchParams(window.location.search);
const actionParam = urlParams.get('action');
let accountNames = [];


const populateDropdown = () => {
let accountArray = [];
    for (let i = 1; i <= localStorage.length; i++) {
        accountArray.push(localStorage.getItem("Bank Account " + i ));
    }

    accountArray.forEach(acc => {
        let arr = acc.split(',');
        accountNames.push(arr[0]);
    })

    for(let i = 0; i < accountNames.length; i++) {
        let opt = accountNames[i];
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
        let amount = amountInput.value;
        if(amount <= 0) return;

        let index = "";
        let valueArray = [];
        let existingAmount = "";
        let accountType = "";


        for (let i = 0; i <= accountNames.length; i++) {
            if(accountNameDropdown.selectedIndex == i){
                valueArray = localStorage.getItem("Bank Account " + i);
                index = "Bank Account " + i;
            }
        }

        accountType = valueArray.split(',')[0];

        existingAmount = valueArray.split(',')[1];

        if(parseFloat(amount) <= 0) {
            alert("The amount is too low, increase it and try again");
            return;
        }

        existingAmount = parseFloat(existingAmount) + parseFloat(amount);
        
        let combinedArray = [accountType, existingAmount].join(',');

        localStorage.setItem(index, combinedArray);

        window.location.assign("../index.html");


    } else if(actionParam == "debit"){
        // debit();
        let amount = amountInput.value;
        if(amount <= 0) return;

        let index = "";
        let valueArray = [];
        let existingAmount = "";
        let accountType = "";


        for (let i = 0; i <= accountNames.length; i++) {
            if(accountNameDropdown.selectedIndex == i){
                valueArray = localStorage.getItem("Bank Account " + i);
                index = "Bank Account " + i;
            }
        }

        accountType = valueArray.split(',')[0];

        existingAmount = valueArray.split(',')[1];

        if(parseFloat(amount) > parseFloat(existingAmount)) {
            alert("The amount is too high, reduce it and try again");
            return;
        }

        existingAmount = parseFloat(existingAmount) - parseFloat(amount);
        
        let combinedArray = [accountType, existingAmount].join(',');

        localStorage.setItem(index, combinedArray);

        window.location.assign("../index.html");

    } else {
        console.log("invalid action");
    }
}

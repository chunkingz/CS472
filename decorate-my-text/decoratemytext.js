
let decorationBtn = document.getElementById("bigger-decor-btn");
let blingCheckBox = document.getElementById("bling");
let userInput = document.getElementById("userInput");
let pigLatin = document.getElementById("pig-latin-btn");
let malkovitch = document.getElementById("malkovitch-btn");


// btn1.addEventListener("click", () => {
//     console.log("btn clicked");
// })

const incrementFontSize = () => {
    let computedFontSize = window.getComputedStyle(userInput).getPropertyValue('font-size');
    userInput.style.fontSize = (parseInt(computedFontSize) + 2) + 'px';
}

decorationBtn.onclick = () => {
    if(String(userInput.value).trim() == "") return;
    userInput.style.fontSize = '24pt';
    userInput.style.textAlign = 'right';
    setInterval(incrementFontSize, 500);
}

blingCheckBox.onclick = () => {
    if(blingCheckBox.checked){
        userInput.style.fontWeight = 'bold';
        userInput.style.color = 'green';
        userInput.style.textDecoration = 'underline';
        userInput.style.textAlign = 'right';
        document.body.style.backgroundImage = "url('https://courses.cs.washington.edu/courses/cse190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else {
        userInput.style.fontWeight = 'normal';
        userInput.style.color = 'initial';
        userInput.style.textDecoration = 'none';
        userInput.style.textAlign = 'left';
        document.body.style.backgroundImage = "";
    }
}

// hackers only section

pigLatin.onclick = () => {
    if(String(userInput.value).trim() == "") return;
    const vowels = ['a','e','i','o','u'];
    
    let inputArray = String(userInput.value).split(' ');

    // vowel checker
    for(let i = 0; i < inputArray.length; i++){
        let startsWithVowel = false;

        for (let j = 0; j < vowels.length; j++) {
            if(inputArray[i].startsWith(vowels[j])) {
                inputArray[i] += 'ay';
                startsWithVowel = true;
                break;
            }
        }

        if(startsWithVowel == false) {
            // the current word (inputArray[i]) starts with a consonant
            
            let temp = inputArray[i].charAt(0);
            // let counter = 0;
            // for (let k = 0; k < vowels.length; k++) {
            //     if(inputArray[i].charAt(k+1).startsWith(vowels[k])){
            //         break;
            //     } else {
            //         temp += inputArray[i].charAt(k+1);
            //         counter += k+1;
            //     }
            // }
            inputArray[i] = inputArray[i].substring(1) + temp + 'ay';
        }
    }

    userInput.value = inputArray.join(' ');
}

malkovitch.onclick = () => {
    if(String(userInput.value).trim() == "") return;

    let inputArray = String(userInput.value).split(' ');

    for(let i=0; i<inputArray.length; i++){
        if(inputArray[i].length >= 5) inputArray[i] = "Malkovich";
    }

    userInput.value = inputArray.join(' ');
}


// Іменований 
import {countSum} from "./js/sum.js";
// Дефолтний
import countSub from "./js/sub.js"
const firstNumInput = document.querySelector("#first-num");
const secondNumInput = document.querySelector("#first-num");
const resultOutput = document.querySelector("#result");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const actionInput = document.querySelector(".form__radio");
    let result = 0;
    if (actionInput.value === "sum" && actionInput.hasAttribute("checked")) {
        result = countSum(firstNumInput, secondNumInput)
    }
    if (actionInput.value === "sub") {
        result = countSub(firstNumInput, secondNumInput)
    }

    resultOutput.textContent = result
})

// countSum(firstNumInput, secondNumInput)
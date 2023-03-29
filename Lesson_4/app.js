const counterValueElement = document.getElementById("value");

const IncreaseButton = document.querySelector("#increase");
const ResetButton = document.querySelector("#reset");
const DecreaseButton = document.querySelector("#decrease");

let counterValue = 0

increaseButton.addEventListener(`click`, () => {
    counterValue++;
    counterValueElement.innerText = counterValue;
})
resetButton.addEventListener(`click`,  () => {
    counterValue = 0;
    counterValueElement.innerText = counterValue;
})
decreaseButton.addEventListener(`click`,  () => {
    counterValue--;
    counterValueElement.innerText = counterValue;
})
function setCounter(value){
    counterValueElement = value;
    if (value > 0){
        counterValue.style.color = "green";
    }else if (value === 0){
        counterValuea.style.color = "gray"
    }else {
         counterValuea.style.color = "red"
    }
}
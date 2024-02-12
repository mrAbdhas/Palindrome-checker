//Accessing html elements with getElementBuId() and assigning them to variables
const checkButton = document.getElementById("check-btn");
const inputField = document.getElementById("text-input");


/* Event Listener with for checkButton is clicked
while its empty
with callback function with arrow syntax as second argument*/
checkButton.addEventListener("click", () => {
    if(inputField.value === "") {
        alert("Please input a value")
    }
})
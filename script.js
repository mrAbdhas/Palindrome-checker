//Accessing HTML elements with getElementBuId() and assigning them to variables
const checkButton = document.getElementById("check-btn");
const inputField = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

checkButton.textContent = "check";
//Function alertMessage when there is no input
function alertMessage() {
    if(inputField.value === "") {
        alert("Please input a value")
    }
}

//* /*array holds objects  */
const inputTypes = [
    {
        input: "A",
        resultOutput: "is a palindrome."

    },
    {
        input: "eye",
        resultOutput: "is a palindrome."

    },
    {
        input: "_eye",
        resultOutput: "is a palindrome."

    },
    {
        input: "race car",
        resultOutput: "is a palindrome."

    },
    {
        input: "not a palindrome",
        resultOutput: "is not a palindrome."

    },
    {
        input: "A man, a plan, a canal. Panama",
        resultOutput: "is a palindrome."
    },
    {
        input: "never odd or even",
        resultOutput: "is a palindrome."
    },
    {
        input: "nope",
        resultOutput: "is not a palindrome."

    },
    {
        input: "almostomla",
        resultOutput: "is not a palindrome."

    },
    {
        input: "My age is 0, 0 si ega ym.",
        resultOutput: "is a palindrome."

    },
    {
        input: "1 eye for of 1 eye.",
        resultOutput: "is not a palindrome."

    },
    {
        input: "0_0 (: /-\ :) 0-0",
        resultOutput: "is a palindrome."

    },
    {
        input: "five|\_/|four",
        resultOutput: "is not a palindrome."

    }

]


function palindromeChecker() {
    const inputValue = inputField.value; // Get the value of the input field

    // Clean the input value, for palindrome comparison by removing all non-alphanumeric charactors
    const regex = /[^a-z0-9_\s]/g //declare a regex variable, assign a pattern to match
    const cleanInput = inputValue.toLowerCase().replace(regex, "");

    // Find the matching objects in inputTypes array, whose 'input' property strictly matches the inputValue
    const result = inputTypes.find((palindrome) => {
        //clean 'input' key value from the array
        const cleanInputFromArray = palindrome.input.toLowerCase().replace(regex, "");
        // return stricly equality between the two after cleaning
        return cleanInput === cleanInputFromArray;
    });

    if (result) {
        // If a matching object is found in inputTypes array
        resultDiv.style.display = "block"; // Display the resultdiv

        // Get the span elements inside resultDiv
        const palindromeInput = resultDiv.querySelector("#palindromeInput");
        const checkOutput = resultDiv.querySelector("#checkOutput");

        // Display the 'input' key value from the array in the palindromeInput span
        palindromeInput.textContent = result.input;
        // Display the 'resultOutput' key value from the array in the checkOutput span
        checkOutput.textContent = result.resultOutput;
    } else {
        // If no matching object is found in inputTypes array
        resultDiv.style.display = "none"; // Hide the resultDiv
    }
    //function call, when there is no input
    alertMessage();
}

// Event Listener add palindromeChecker function to the click event of the checkButton
checkButton.addEventListener("click", palindromeChecker);

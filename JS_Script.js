
let nameOnCard = document.getElementById("name-on-card");
let monthOnCard = document.getElementById("month-on-card");
let yearOnCard = document.getElementById("year-on-card");
let cvcOnCard = document.getElementById("cvc-back-side");



let fullName = document.getElementById('name');
let cardNumber = document.getElementById('card-number');
let month = document.getElementById('month');
let year = document.getElementById('year');
let cvc = document.getElementById('cvc');
let myForm = document.getElementById("myForm");



function checkName(id) {
    id.style.borderColor = "hsl(249, 99%, 64%)";
    // Remove any existing spaces
    let fullname = id.value;

    // Check if the input contains digits
    let hasDigits = /\d/.test(fullname);

    if (hasDigits) {
        id.className = "failed";
        errorMessage(id, "Enter correct name");
    } else {
        id.value = fullname;

        id.className = "success";
        if (fullname == "") {
            nameOnCard.textContent = "Name Goes Here";
        }
        else {
            nameOnCard.textContent = fullname;
        }


        // Clear the error message when the input is valid
        clearErrorMessage(id);
    }
}

function checkNumber(id) {
    id.style.borderColor = "hsl(249, 99%, 64%)";
    // Remove any existing spaces
    let cardnumber = id.value.replace(/\s/g, '');

    // Check if the input contains non-digit characters (alphabets or special characters)
    let hasNonDigits = /\D/.test(cardnumber);

    if (hasNonDigits) {
        id.className = "failed";
        errorMessage(id, "Wrong format. Numbers only");
    } else {
        // Add a space every four characters
        let formattedInput = '';
        for (let i = 0; i < cardnumber.length; i += 4) {
            formattedInput += cardnumber.substr(i, 4) + ' ';
        }

        // Trim the extra space at the end
        formattedInput = formattedInput.trim();

        // Set the formatted value back to the input field
        id.value = formattedInput;
        id.className = "success";
        // Update the span content character by character
        let spanContent = document.getElementById("number");
        updateSpanContent(spanContent, formattedInput);

        // Clear the error message when the input is valid
        clearErrorMessage(id);
    }
}



function validateMonth(id) {
    id.style.borderColor = "hsl(249, 99%, 64%)";

    clearErrorMessage(id)

    let monthVal = id.value;

    if (monthVal < 10) {
        monthOnCard.textContent = "0" + monthVal;
    }
    else {
        monthOnCard.textContent = monthVal;
    }
}

function validateYear(id) {
    id.style.borderColor = "hsl(249, 99%, 64%)";
    clearErrorMessage(id)
    let yearVal = id.value;


    yearOnCard.textContent = + yearVal;

}

function validateCVC(id) {
    id.style.borderColor = "hsl(249, 99%, 64%)";
    clearErrorMessage(id)
    let cvcVal = id.value;


    cvcOnCard.textContent = + cvcVal;

}

function formSubmit(event) {
    event.preventDefault();

    let cardNumberVal = cardNumber.value;

    if (cardNumberVal.length != 19) {
        cardNumber.className = "failed"
        errorMessage(cardNumber, "*card number should be 16 digits long")
    }

    else {

        cardNumber.className = "success"
    }


    if (month.value == "") {
        month.className = "failed"
        errorMessage(month, "*cannot be blanked")
    }

    else {
        month.className = "success"
    }


    if (year.value == "") {
        year.className = "failed"


        errorMessage(year, "*cannot be blanked")
    }

    else {
        year.className = "success"
    }

    if (cvc.value == "") {
        cvc.className = "failed"
        errorMessage(cvc, "*cannot be blanked")
    }

    else {
        cvc.className = "success"
    }

    let successCount = document.querySelectorAll(".success")

    if (successCount.length == 5) {

        let gettingDetails = document.getElementsByClassName("getting-details");

        for (let i = 0; i < gettingDetails.length; i++) {
            let containerDiv = gettingDetails[i];

            // Remove all child elements from the div
            while (containerDiv.firstChild) {
                containerDiv.removeChild(containerDiv.firstChild);
            }

            // Create new elements
            let image = document.createElement("img");
            let text = document.createElement("h3");
            let paragraph = document.createElement("p");
            let continueButton = document.createElement("button");


            image.src = "images/icon-complete.svg";
            text.textContent = "Thank you!";
            paragraph.textContent = "We've added your card details";
            continueButton.textContent = "Continue";

            //Adding css to newly created elements
            image.style.marginBottom = "1rem"


            text.style.marginBottom = "2rem"
            text.style.textAlign = "center"

            paragraph.style.marginBottom = "1rem";




            continueButton.style.marginBottom = "1rem"
            continueButton.style.textAlign = "center"
            continueButton.style.padding = ".5rem"
            continueButton.style.marginTop = ".5rem"
            continueButton.style.backgroundColor = "hsl(278, 68%, 11%)"
            continueButton.style.color = "white"
            continueButton.style.borderRadius = "20px"
            continueButton.style.outline = "none"
            continueButton.style.width = "100%"



            containerDiv.style.marginTop = "2rem    ";

            containerDiv.style.marginLeft = "auto";
            containerDiv.style.marginRight = "auto";

            containerDiv.style.display = "flex";
            containerDiv.style.flexDirection = "column";
            containerDiv.style.justifyContent = "center";
            containerDiv.style.alignItems = "center";




            // Append new elements to the containerDiv
            containerDiv.appendChild(image);
            containerDiv.appendChild(text);
            containerDiv.appendChild(paragraph);
            containerDiv.appendChild(continueButton);

        }


    }

}


function updateSpanContent(spanElement, newContent) {
    let originalContent = spanElement.textContent;
    let updatedContent = '';

    // Update the content character by character
    for (let i = 0; i < originalContent.length; i++) {
        updatedContent += newContent.charAt(i) || '-';
    }

    spanElement.textContent = updatedContent;
}





function errorMessage(id, message) {
    id.style.borderColor = "hsl(0, 100%, 66%)";
    let parent = id.parentElement;
    parent.querySelector(".error").textContent = message;
    let errorElement = parent.querySelector(".error");
    errorElement.style.visibility = "visible";
}

function clearErrorMessage(id) {
    let parent = id.parentElement;
    parent.querySelector(".error").textContent = "";
}

function changeBorder(id) {
    id.style.borderColor = "grey";
}


// Adding Event Listeners when user click on input field

fullName.addEventListener("input", function () {
    checkName(fullName);
});
cardNumber.addEventListener("input", function () {
    checkNumber(cardNumber);
});


month.addEventListener("input", function () {
    validateMonth(month);
});
year.addEventListener("input", function () {
    validateYear(year);
});

cvc.addEventListener("input", function () {
    validateCVC(cvc);
});


// Adding Event Listeners when input field loses focus


fullName.addEventListener("change", function () {
    changeBorder(fullName);
});
cardNumber.addEventListener("change", function () {
    changeBorder(cardNumber);
});

month.addEventListener("change", function () {
    changeBorder(month);
});
year.addEventListener("change", function () {
    changeBorder(year);
});


cvc.addEventListener("change", function () {
    changeBorder(cvc);
});


myForm.addEventListener("submit", function (event) {
    formSubmit(event)
})
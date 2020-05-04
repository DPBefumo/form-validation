let form = document.querySelector('#parking-form')
let validate = document.querySelector('#submit-button')
let inputFields = document.querySelectorAll('input')
let formIsValid

function makeInvalid () {
    return 0
} 

function makeValid (){
    return 1
} 

function validateName() {
    let inputName = document.getElementById("name")
    if (inputName.value === ""){
        return makeInvalid(inputName)
    }else {
        return makeValid(inputName)
    }

}

function valiadteCarYr() {
    let inputYear = document.querySelector('#car-year')
    if (Number.isInteger(inputYear.value) && inputYear.length === 4 && inputYear > 1900 && inputYear < 2020) {
        return makeValid(inputYear)
    }else {
        return makeInvalid(inputYear)
    }
}

function validateCarMk() {
    let inputCarMk = document.querySelector('#car-make')
    if (inputCarMk.value <= 0) {
        return makeInvalid(inputCarMk)
    } else {
        return makeValid(inputCarMk)
    }
}

function validateCarMd() {
    let inputCarMd = document.querySelector('#car-model')
    if (inputCarMd.value <= 0) {
        return makeInvalid(inputCarMd)
    } else {
        return makeValid(inputCarMd)
    }
}

function validateDate() {
    let inputDate = document.querySelector('#start-date')
    //must be a future date code does not prevent it from past date but looks right. Issue in validation?
    let todayDate = Date.now()
    if (inputDate.value < todayDate) {
        return makeInvalid(inputDate) 
    } else {
        return makeValid(inputDate)
    }
}

function validateDays() {
    let inputDays = document.querySelector('#days')
    //days must be a number
    if (Number.isInteger(inputDays.value) && inputDays >= 1 && inputDays <= 30) {
        return makeValid(inputDays)
    } else {
        return makeInvalid(inputDays)
    }
    //must be vaild
}

function luhnCheck(val) {
    let sum = 0;
    for (let i = 0; i < val.length; i++) {
        let intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

function validateCardNumber() {
    let cardNumber = document.querySelector('#credit-card')
    let regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(cardNumber)) 
        return false;

    return luhnCheck(cardNumber);
    //must be a 16 digit number
    //must be vaild
}

function validateCVV() {
    let inputCVV = document.querySelector('#cvv')
    //must be a 3 digit number
    if (inputCVV.length < 3 && inputCVV.length > 4) {
        return makeInvalid(inputCVV)
    } else {
        return makeValid(inputCVV)
    }
    //must be vaild
}

function validateExpiration() {
    let inputExpiration = document.querySelector('#expiration')
    //vaild month and year
    //date must not be in the past
    //must be vaild
}

validate.onclick = function (){
    for (let inputField of inputFields) {
        let inputValue = inputField.value
        let parentEl = inputField.parentElement
        let parent = inputField.parentNode
        let text = document.createTextNode("This field is Required") //is there a way to make "This field" say which item is required?
        let divRef = document.createElement("div")
        if (inputValue.length <= 0) {
            parentEl.classList.remove("input-valid")
            parentEl.classList.add("input-invalid")
            divRef.appendChild(text)
            parent.appendChild(divRef) //cant get this to stop repeating
            formIsValid = false
        } else {
            parentEl.classList.remove("input-invalid") //code breaks either at credit card or make inputs
            parentEl.classList.add("input-valid")
            parent.removeChild(parent.lastChild)
        }    
    }
}

form.addEventListener('submit', function(event){
    validateName()
    valiadteCarYr()
    validateCarMk()
    validateCarMd()
    validateDate()
    validateDays()
    validateCardNumber()
    validateCVV()
    validateExpiration()
    event.preventDefault()
    //only submit when these are valid. How to prove they are valid?

    //must create a total amount owed when submit button is entered and valid. The cost is $5 per weekday, and $7 per weekend day. `.map` and `.reduce` will be very helpful in calculating the total cost. will use #total
})
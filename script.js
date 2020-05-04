let form = document.querySelector('#parking-form')
let validate = document.querySelector('#submit-button')
let inputFields = document.querySelectorAll('input')
let formIsValid

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

function makeInvalid () {
    return 0
} 

function makeValid (){
    return 1
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
            parentEl.classList.remove("input-invalid") //code breaks with multiple entries
            parentEl.classList.add("input-valid")
            parent.removeChild(parent.lastChild)
        }    
    }
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
    //must be a number
    if (Number.isInteger(inputYear.value) && inputYear.length === 4 && inputYear > 1900 && inputYear < 2020) {
        return makeValid(inputYear)
    }else {
        return makeInvalid
    }
    //must be after 1900 
    //must not be in the future
    //must be vaild
}

function validateCarMk() {
    let inputCarMk = document.querySelector('#car-make')
}

function validateCarMd() {
    let inputCarMd = document.querySelector('#car-model')
}


function validateDate() {
    let inputDate = document.querySelector('#start-date')
    //must be a future date
    //must be vaild
}

function validateDays() {
    let inputDays = document.querySelector('#days')
    //days must be a number
    //must be between 1 and 30
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

function validateCardNumber(cardNumber) {
    let regex = new RegExp("^[0-9]{16}$");
    // let cardNumber = document.querySelector('#credit-card')
    if (!regex.test(cardNumber))
        return false;

    return luhnCheck(cardNumber);
    //must be a 16 digit number
    //must be vaild
}

function validateCVV() {
    let inputCVV = document.querySelector('#cvv')
    //must be a 3 digit number
    //must be vaild
}

function validateExpiration() {
    let inputExpiration = document.querySelector('#expiration')
    //vaild month and year
    //date must not be in the past
    //must be vaild
}
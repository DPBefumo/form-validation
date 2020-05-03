let form = document.querySelector('#parking-form')
let validate = document.querySelector('#submit-button')
let inputFields = document.querySelectorAll('input')
let formIsValid

form.addEventListener('submit', function(event){
    validateName()
    valiadteCar()
    validateDate()
    validateDays()
    validateCardNumber()
    validateCVV()
    validateExpiration()
    event.preventDefault()
    //only submit when these are valid. How to prove they are valid?

    //must create a total amount owed when submit button is entered and valid. The cost is $5 per weekday, and $7 per weekend day. `.map` and `.reduce` will be very helpful in calculating the total cost. will use #total
})

//how to prove validty?

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
            parentEl.classList.remove("input-invalid") //code breaks due to the car validation line
            parentEl.classList.add("input-valid")
            parent.removeChild(parent.lastChild)
        }    
    }
}

function validateName() {
    //should only be letters
    //must be vaild
}

function valiadteCar() {
    //must be a number
    //must be after 1900 
    //must not be in the future
    //must be vaild
}

function validateDate() {
    //must be a future date
    //must be vaild
}

function validateDays() {
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

function validateCardNumber(number) {
    let regex = new RegExp("^[0-9]{16}$");
    let cardNumber = document.querySelector('#credit-card')
    if (!regex.test(cardNumber))
        return false;

    return luhnCheck(number);
    //must be a 16 digit number
    //must be vaild
}

function validateCVV() {
    //must be a 3 digit number
    //must be vaild
}

function validateExpiration() {
    //vaild month and year
    //date must not be in the past
    //must be vaild
}
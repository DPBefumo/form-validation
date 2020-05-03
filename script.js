let form = document.querySelector("#parking-form")
let inputFields = document.querySelectorAll("input")

form.addEventListener("submit", function(event){
    validateName()
    valiadteCar()
    validateDays()
    validateDate()
    validateCardNumber()
    validateCVV()
    validateExpiration()
    event.preventDefault()  
})

for (let inputField of inputFields) {
    let inputValue = inputField.value
    let parentEl = inputField.parentElement
    let parent = inputField.parentNode
    let text = document.createTextNode("This field is Required") //is there a way to make "This field" say which item is required?
    let divRef = document.createElement("div")
    if (inputValue.length <= 0) {

        divRef.appendChild(text)
        parent.appendChild(divRef) //cant get this to stop repeating
    } else {
        parent.removeChild(parent.lastChild)
    }
}  

function makeValid() {
    parentEl.classList.remove("input-invalid")
    parentEl.classList.add("input-valid")
}

function makeInvalid() {
    parentEl.classList.remove("input-valid")
    parentEl.classList.add("input-invalid")
}

function validateName() {
    let inputName = document.getElementById("name")
    let letters = /^{A-Za-z}+$/
    if(inputName.value.match(letters)) {
        return true
    } else {
        inputName.focus()
        return false
    }
}// doesnt work

function valiadteCar() {
    let carYear = document.querySelector("#car-year")   
    if (carYear.length === 4 && (carYear.value > 1900 && carYear.value < 2020)) {
        return true
    } else {
        return false
    }
}// doesnt work, and on third click the whole car line disappears

function validateDate() {
    let date = document.querySelector('#start-date')
    let dateToday = Date.now()
    if (date.valueAsNumber < dateToday) {
        return 0
    } else {
        return 1
    }
} // doesnt work

function validateDays() {

}

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
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

function validateCVV() {

}

function validateExpiration() {

}
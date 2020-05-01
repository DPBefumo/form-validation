console.log('Add validation!');

let form = document.querySelector("#parking-form")
let inputFields = document.querySelectorAll("input")

form.addEventListener("submit", function(event){
    event.preventDefault()
    for (let inputField of inputFields) {
        let inputValue = inputField.value
        let parentEl = inputField.parentElement
        if (inputValue.length > 0) {
            parentEl.classList.remove("input-invalid")
            parentEl.classList.add("input-valid")
        } else {
            parentEl.classList.remove("input-valid")
            parentEl.classList.add("input-invalid")
        }
    }    
    // add validation functions here 
    // validateName ()
    // valiadteCar ()
    // validateDate ()
    // validateDays ()
    // validateCC ()
    // validateCVV ()
    // validateExpiration ()
})

// function valiadteCar () {

// }

// function validateDate () {

// } 

// function validateDays () {

// }

// function validateCC () {

// }

// function validateCVV () {

// }

// function validateExpiration () {

// }
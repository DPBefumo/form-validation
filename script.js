let form = document.querySelector("#parking-form")
let inputFields = document.querySelectorAll("input")

form.addEventListener("submit", function(event){
    event.preventDefault()
    for (let inputField of inputFields) {
        let inputValue = inputField.value
        let parentEl = inputField.parentElement
        let parent = inputField.parentNode
        let text = document.createTextNode("This field is Required")
        let divRef = document.createElement("div")
        if (inputValue.length <= 0) {
            parentEl.classList.remove("input-valid")
            parentEl.classList.add("input-invalid")
            divRef.appendChild(text)
            parent.appendChild(divRef)
        } else {
            parentEl.classList.remove("input-invalid")
            parentEl.classList.add("input-valid")
            parent.removeChild(parent.lastChild)
        }

        // if (parent.length > 0) {
        //     let textValid = document.createTextNode("")
        //     let divRef = document.createElement("div")
        //     divRef.appendChild(textValid)
        //     parent.appendChild(divRef)
        // } else {
        //     let text = document.createTextNode("This field is Required")
        //     let divRef = document.createElement("div")
        //     divRef.appendChild(text)
        //     parent.appendChild(divRef)
        // }
        
    }    
    // add validation functions here 
    validateName ()
    // valiadteCar ()
    // validateDate ()
    // validateDays ()
    // validateCC ()
    // validateCVV ()
    // validateExpiration ()
})

function validateName () {
    let inputName = document.querySelector("#name")
    let letters = /^{A-Za-z}+$/
    // if(inputName.value.match(letters)) {
    //     return true
    // } else {
    //     alert("Please input alphabet characters only")
    //     return false
    // }
}

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
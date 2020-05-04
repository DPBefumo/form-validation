//      if (name == "") {
//          alert ("Please provide your name!")
//          document.getElementById("name").focus ()
//          return false
//      }
//     return (true)
// }
// name.addEventListener("input", function(event){
//     if 

    // removeErrorMessage ()
    // formIsValid = true

    // for (let key of keys){
    //     key.addEventListener("click", function() {
    //         let newEl = document.createElement("div")
    //         let text = document.createTextNode(key.innerText)
    //         newEl.appendChild(text)
    //         windowDisplay.appendChild(newEl)
    //     })
    // }
    
    // clear.addEventListener("click", function(){
    //     windowDisplay.innerText = ""
    // })
    
    // equal.addEventListener("click", function(){
    //     windowDisplay.innerText = eval(windowDisplay.innerText)
    // })
    

// function validateName() {
//     const inputValue = inputValidation.value
//     const parentEl = inputValidation.parentElement 
//     if (inputValue) {
//         parentEl.classList.remove("input-invalid")
//         parentEl.classList.add("input-valid")
//     } else {
//         parentEl.classList.remove("input-valid")
//         parentEl.classList.add("input-invalid")
//     }
// }

    // add validation functions here 
    // validateName ()
    // valiadteCar ()
    // validateDate ()
    // validateDays ()
    // validateCC ()
    // validateCVV ()
    // validateExpiration ()
// })

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

    // let errorEl = document.querySelectorAll(".input-field")
    // console.log(errorEl)
    // let errMsg = document.createElement ("div")
    // console.log(errMsg)
    // let text = document.createTextNode("This field is Required")
    // console.log(text)
    // errMsg.appendChild(text)
    // errorEl.appendChild(errMsg)

    // divRef.appendChild(textValid)
    //         parent.appendChild(divRef)

    //         let errorEls = document.querySelectorAll(".input-field")
    
    
    // inputValue.length <= 0

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
        } else {
            parentEl.classList.remove("input-invalid") //code breaks due to the car validation line
            parentEl.classList.add("input-valid")
            parent.removeChild(parent.lastChild)
        }
    }            
    
    let inputName = document.getElementById("name")

    let parent = inputField.parentNode
    let text = document.createTextNode("This field is Required") //is there a way to make "This field" say which item is required?
    let divRef = document.createElement("div")

    divRef.appendChild(text)
    parent.appendChild(divRef)    

    parent.removeChild(parent.lastChild)

    let carYear = document.getElementById("car-year")   
    let year = carYear.value
    if (isNaN(year)) {
        return 0
    }
    else {
        return 1
    }

    let letters = /^{A-Za-z}+$/;
    if(inputName.value.match(letters)) {
        return true
    } else {
        inputName.focus()
        return false
    }
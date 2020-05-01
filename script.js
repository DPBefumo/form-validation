console.log('Add validation!');

const form = document.querySelector("#parking-form")
console.log(form)
const formIsValid =

form.addEventListener("submit", function(event){
    event.preventDefault()
    // add validation functions here 
    validateName ()
    
})


function validateName() {
    const name = document.querySelector("#name")
    const nameValue = name.value
    const parentEl = name.parentElement
    
    if (nameValue) {
        console.log("name is valid")
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    } else {
        console.log("name is not valid")
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
    }

}
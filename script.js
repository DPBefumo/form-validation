console.log('Add validation!');

const form = document.querySelector("#parking-form")
console.log(form)

const name = document.querySelector("#name")

form.addEventListener("submit", function(event){
    event.preventDefault()
    // add validation functions here 
    validateName ()
})


// function validateName() {
//      if (name == "") {
//          alert ("Please provide your name!")
//          document.getElementById("name").focus ()
//          return false
//      }
//     return (true)
}
// name.addEventListener("input", function(event){
//     if 
// })
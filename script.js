const form = document.querySelector('#parking-form')
const validate = document.querySelector('#submit-button')
const inputFields = document.querySelectorAll('input')
let formIsValid //assigned but never used

form.addEventListener('submit', function (event) {
  event.preventDefault()
  validateName()
  validateCar()
  validateDate()
  validateDays()
  validateCC()
  validateCVV()
  validateExpiration()
  
  for (const inputField of inputFields) {
    const inputValue = inputField.value
    const parent = inputField.parentNode
    const text = document.createTextNode('This field is Required') // is there a way to make "This field" say which item is required?
    const divRef = document.createElement('div')
    if (inputValue.length <= 0) {
      divRef.appendChild(text)
      parent.appendChild(divRef) // cant get this to stop repeating
    } else {
      parent.removeChild(parent.lastChild) // the lastChild deletes code that is already written in HTML
    }
  }
  // must create a total amount owed when submit button is entered and valid. The cost is $5 per weekday, and $7 per weekend day. `.map` and `.reduce` will be very helpful in calculating the total cost. will use #total
})

function makeValid (parentElement) {
  parentElement.classList.add('input-valid')
  parentElement.classList.remove('input-invalid')
}

function makeInvalid (parentElement) {
  parentElement.classList.remove('input-valid')
  parentElement.classList.add('input-invalid')
}
//helper functions aren't being applied in this form... why is that?


function validateName () {
  const inputName = document.getElementById('name')
  const parentName = inputName.parentElement
  if(inputName.value) {
    makeValid(parentName)
  } else {
    makeInvalid(parentName)
  }
}

function validateCar () {
  const inputYear = document.querySelector('#car-year')
  const parentYear = document.querySelector('#car-field')
  const inputCarMk = document.querySelector('#car-make')
  const inputCarMd = document.querySelector('#car-model')
  if (inputYear.value > 1900 && inputYear.value < 2021 && inputCarMk !== '' && inputCarMd !== ''){
    makeValid(parentYear)
  } else {
    makeInvalid(parentYear)
  }
}

function validateDate () {
  const inputDate = document.querySelector('#start-date')
  const parentDate = inputDate.parentElement
  const todayDate = Date.now()
  if (inputDate.valueAsNumber > todayDate) {
    makeValid(parentDate)
  } else if (inputDate.valueAsNumber < todayDate) {
    makeInvalid(parentDate)
  } else {
    makeInvalid(parentDate)
  }
}

function validateDays () {
  const inputDays = document.querySelector('#days')
  const parentDays = inputDays.parentElement
  if (inputDays.value > 0 && inputDays.value < 31) {
    makeValid(parentDays)
  } else {
    makeInvalid(parentDays)
  }
}

function validateCC() {
  const cardNumber = document.querySelector('#credit-card')
  const parentCardNumber = cardNumber.parentElement
  validateCardNumber ()
  if (cardNumber.value === '') {
    makeInvalid(parentCardNumber)
  } else if (validateCardNumber (cardNumber.value) === false) {
    makeInvalid(parentCardNumber) 
  } else {
    makeValid(parentCardNumber)
  }
}

function luhnCheck (val) {
  let sum = 0
  for (let i = 0; i < val.length; i++) {
    let intVal = parseInt(val.substr(i, 1))
    if (i % 2 === 0) {
      intVal *= 2
      if (intVal > 9) {
        intVal = 1 + (intVal % 10)
      }
    }
    sum += intVal
  }
  return (sum % 10) === 0
}

function validateCardNumber (number) {
  const regex = new RegExp('^[0-9]{16}$')
  if (!regex.test(number)) { return false }

  return luhnCheck(number)
}

function validateCVV () {
  const inputCVV = document.querySelector('#cvv')
  const parentCVV = inputCVV.parentElement
  if (inputCVV.value < 999 && inputCVV.value > 100) {
    makeValid(parentCVV)
  } else {
    makeInvalid(parentCVV)
  }
}

function validateExpiration () {
  const inputExpiration = document.querySelector('#expiration')
  const parentExpiration = inputExpiration.parentElement
  // vaild month and year
  // date must not be in the past
  if (inputExpiration > 0) {
    makeValid(parentExpiration)
  } else {
    makeInvalid(parentExpiration)
  }
}
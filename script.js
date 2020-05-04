const form = document.querySelector('#parking-form')
const validate = document.querySelector('#submit-button')
const inputFields = document.querySelectorAll('input')
let formIsValid //assigned but never used

form.addEventListener('submit', function (event) {
  event.preventDefault()
  validateName()
  valiadteCarYr()
  validateCarMk()
  validateCarMd()
  validateDate()
  validateDays()
  validateCardNumber()
  validateCVV()
  validateExpiration()
  // only submit when these are valid. How to prove they are valid?
  // for (const inputField of inputFields) {
  //   const inputValue = inputField.value
  //   const parent = inputField.parentNode
  //   const text = document.createTextNode('This field is Required') // is there a way to make "This field" say which item is required?
  //   const divRef = document.createElement('div')
  //   if (inputValue.length <= 0) {
  //     divRef.appendChild(text)
  //     parent.appendChild(divRef) // cant get this to stop repeating
  //   } else {
  //     parent.removeChild(parent.lastChild) // the lastChild deletes code that is already written in HTML
  //   }
  // }
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

function valiadteCarYr () {
  const inputYear = document.querySelector('#car-year')
  const parentYear = inputYear.parentElement
  if (Number.isInteger(inputYear.value) && inputYear.length === 4 && inputYear > 1900 && inputYear < 2020) {
    makeValid(parentYear)
  } else {
    makeInvalid(parentYear)
  }
}

function validateCarMk () {
  const inputCarMk = document.querySelector('#car-make')
  const parentCarMk = inputCarMk.parentElement
  if (inputCarMk.value <= 0) {
    makeInvalid(parentCarMk)
  } else {
    makeValid(parentCarMk)
  }
}

function validateCarMd () {
  const inputCarMd = document.querySelector('#car-model')
  const parentCarMd = inputCarMd.parentElement
  if (inputCarMd.value <= 0) {
    return makeInvalid(inputCarMd)
  } else {
    return makeValid(inputCarMd)
  }
}

function validateDate () {
  const inputDate = document.querySelector('#start-date')
  // must be a future date code does not prevent it from past date but looks right. Issue in validation?
  const todayDate = Date.now()
  if (inputDate.value < todayDate) {
    return makeInvalid(inputDate)
  } else {
    return makeValid(inputDate)
  }
}

function validateDays () {
  const inputDays = document.querySelector('#days')
  const parentDays = inputDays.parentElement
  // days must be a number
  if (Number.isInteger(inputDays.value) && inputDays > 0 && inputDays < 31) {
    makeValid(parentDays)
  } else {
    makeInvalid(parentDays)
  }
  // must be vaild
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
}//did not apply to my page

function validateCardNumber () {
  const cardNumber = document.querySelector('#credit-card')
  const parentCardNumber = cardNumber.parentElement
  // const regex = new RegExp('^[0-9]{16}$')
  // if (!regex.test(cardNumber)) { return false }

  // return luhnCheck(cardNumber)
  // // must be a 16 digit number
  if (cardNumber > 0) {
    makeValid(parentCardNumber)
  } else {
    makeInvalid(parentCardNumber)
  }
  // must be vaild
}

function validateCVV () {
  const inputCVV = document.querySelector('#cvv')
  const parentCVV = inputCVV.parentElement
  // must be a 3 digit number
  if (inputCVV.length < 3 && inputCVV.length > 4) {
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
const form = document.querySelector("#contactForm");

const fName = document.querySelector("#fName");
const fNameError = document.querySelector("#fNameError");

const lName = document.querySelector("#lName");
const lNameError = document.querySelector("#lNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const pNumber = document.querySelector("#pNumber");
const PnumberError = document.querySelector("#pNumberError");

const tId = document.querySelector("#tId");
const tIdError = document.querySelector("#tIdError");

const question = document.querySelector("#question");
const questionError = document.querySelector("#questionError");

const submit = document.querySelector(".submit");

submit.addEventListener(`click`, () => {
  event.preventDefault();
  if (fName.value.trim().length < 2) {
    fNameError.style.display = "inline";
  } else {
    fNameError.style.display = "none";
  }
  if (lName.value.trim().length < 2) {
    lNameError.style.display = "inline";
  } else {
    lNameError.style.display = "none";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (pNumber.value.trim().length < 8) {
    pNumberError.style.display = "inline";
  } else {
    pNumberError.style.display = "none";
  }
  if (tId.value.trim().length < 10) {
    tIdError.style.display = "inline";
  } else {
    tIdError.style.display = "none";
  }
  if (question.value.trim().length < 15) {
    questionError.style.display = "inline";
  } else {
    questionError.style.display = "none";
  }
});

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

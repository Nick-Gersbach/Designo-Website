document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector(".main-nav").classList.toggle("show");
});

//Email Validate
const emailInput = document.getElementById("email");
const emailError = document.querySelector(".email-error-msg");
const emailSubmit = document.getElementById("contact-form-submit");

emailSubmit.addEventListener("click", validateEmail);

function validateEmail(e) {
  if (emailInput.value === "") {
    emailError.style.visibility = "visible";
  }
  // e.preventDefault();
}

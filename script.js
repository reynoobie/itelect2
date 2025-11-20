const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
  let isValid = true;
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  // Full Name must have at least 2 words
  const fullname = document.getElementById("fullname").value.trim();
  if (fullname === "" || fullname.split(" ").length < 2) {
    document.getElementById("fullnameError").textContent = "Enter your full name (first and last).";
    isValid = false;
  }

const studentID = document.getElementById("student-id").value.trim();
const studentIDPattern = /^\d{2}-\d+$/; 

if (!studentIDPattern.test(studentID)) {
  document.getElementById("studentIDError").textContent = "Enter a valid ID (format: xx-xxxx).";
  isValid = false;
} else {
  document.getElementById("studentIDError").textContent = "";
}


  // Birthday required
  if (document.getElementById("birthday").value === "") {
    document.getElementById("birthdayError").textContent = "Birthday is required.";
    isValid = false;
  }

  // Age
  const age = document.getElementById("age").value.trim();
  if (age === "" || isNaN(age) || age <= 0) {
    document.getElementById("ageError").textContent = "Enter a valid age.";
    isValid = false;
  }

  // Gender
  const genderMale = document.getElementById("male").checked;
  const genderFemale = document.getElementById("female").checked;
  if (!genderMale && !genderFemale) {
    document.getElementById("genderError").textContent = "Select a gender.";
    isValid = false;
  }

  // Address
  if (document.getElementById("address").value.trim() === "") {
    document.getElementById("addressError").textContent = "Address is required.";
    isValid = false;
  }

  // Phone: exactly 11 digits
  const phone = document.getElementById("phone").value.trim();
  if (!/^\d{11}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone number must be 11 digits.";
    isValid = false;
  }

  // Email
  if (document.getElementById("email").value.trim() === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  }

  // Course
  if (document.getElementById("course").value === "") {
    document.getElementById("courseError").textContent = "Select a course.";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault(); // prevents submission if any field is invalid
  }

   const confirmed = confirm("Are all your information correct?");
  if (!confirmed) {
    event.preventDefault();
  }
});

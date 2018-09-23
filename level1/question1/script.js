
/*function validateEmail(inputValue){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // return a boolean result
    return emailPattern.test(inputValue);
}
console.log(validateEmail('oda_m91@hotmail.com'));



function validatePhone(inputValue) {
  var numberPattern = /^[0-9]{8}$/; // Checks for valid norwegian numbers (8 digits)

  return numberPattern.test(inputValue);
}

console.log(validatePhone(97122605));
*/

//console.log(document.forms["contactForm"]["firstName"].value);

//Use RegEx to validate form
// Solution is based on the lessons provided and this link https://www.geeksforgeeks.org/form-validation-using-html-javascript/
function validateForm() {
  var firstName = document.forms["contactForm"]["firstName"].value;
  if (firstName == "") {
    console.log("First name must be filled out");

  }

  var lastName = document.forms["contactForm"]["lastName"].value;
  if (lastName == "") {
    console.log("Last name must be filled out");
    return false;
  }

  var phoneNumber = document.forms["contactForm"]["phoneNumber"].value;
  var numberPattern = /^[0-9]{8}$/;

  if (phoneNumber == "") {
    console.log("Phone number must be filled out");
    return false;
  }

  var checkPhoneNumber = numberPattern.test(phoneNumber);
  console.log(checkPhoneNumber);


  var email = document.forms["contactForm"]["email"].value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (email == "") {
    console.log("Email must be filled out");
    return false;
  }

  var checkEmail = emailPattern.test(email);
  console.log(checkEmail);
  }

function testNameValidation() {
  console.assert(
    validateName("") === "The name field cannot be empty.",
    "The function validateName didn't check if the field of the user name is empty."
  );

  console.assert(
    validateName("AAAAAAAAAAAAAAAAAAAAA") ===
      "The name of the client is too long.",
    "The function validateName didn't check if the name of the user exceeds the maximum characters allowed."
  );

  console.assert(
    validateName("J0hn") === "The name you inserted is invalid.",
    "The function validateName didn't check if the user name is invalid."
  );
}

function testLastNameValidation() {
  console.assert(
    validateLastName("") === "The last name field cannot be empty.",
    "The function validateLastName didn't check if the field of the last name is empty."
  );

  console.assert(
    validateLastName("AAAAAAAAAAAAAAAAAAAAA") ===
      "The last name of the client is too long.",
    "The function validateLastName didn't check if the last name of the user exceeds the maximum characters allowed."
  );

  console.assert(
    validateLastName("D0e") === "The last name you inserted is invalid.",
    "The function validateLastName didn't check if the user last name is invalid."
  );
}

function testValidateEmail() {
  console.assert(
    validateEmail("") === "The email field cannot be empty.",
    "The function validateEmail didn't check if the email field is empty."
  );

  console.assert(
    validateEmail("patoreadg.com") === "The specified email is invalid.",
    "The function validateEmail didn't check if the email is invalid."
  );
}

function unitaryTests() {
  testNameValidation();
  testLastNameValidation();
  testValidateEmail();
}

unitaryTests();

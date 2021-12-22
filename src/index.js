const $form = document.form;


/* Floating Action Button Initialization */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        hoverEnabled: false
    });
  });

  /* Form Validators */

  function validateName(userName){
    const regEx = /^[A-z]+$/;
    
    if(userName.length === 0) return 'The name field cannot be empty.';
    if(userName.length >= 20) return "The name of the client is too long.";
    if(regEx.test(userName) === false) return 'The name you inserted is invalid.';

    return '';
  };

  function validateLastName(lastName){
    const regEx = /^[A-z]+$/;
    if(lastName.length === 0) return 'The last name field cannot be empty.';
    if(lastName.length >= 20) return "The last name of the client is too long.";
    if(regEx.test(lastName) === false) return 'The last name you inserted is invalid.';

    return '';
  };

  function validateEmail(email){
    const regEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if(email.length === 0) return 'The last email field cannot be empty.';
    if(regEx.test(email) === false) return 'The specified email is invalid.';

    return '';
  };

  $form.onsubmit = validateNewsletterForm;

  function validateNewsletterForm(event) {
    let userName = $form["user-name"].value;
    let userLastName = $form["user-last-name"].value;
    let userEmail = $form["user-email"].value;
    

    const errors = {
      "user-name": validateName(userName),
      "user-last-name": validateLastName(userLastName),
      "user-email": validateEmail(userEmail)
    }

    deletePreviousErrors();

    const success = errorHandling(errors) === 0;

    // if(success) return $form.submit

    event.preventDefault();
};

function errorHandling(errors) {
  const error = errors;
  const keys = Object.keys(errors);
  let errorQuantity = 0;

  keys.forEach(function(key){

    if (error[key]){
      $form[key].id = 'error';

      const $errorList = document.querySelector('.error-list');
      const $error = document.createElement('li');
      $error.textContent = error[key];
      $error.className = 'existing-error';
      $errorList.appendChild($error);

      errorQuantity++;

    } else {
      $form[key].id = '';
    }
  });
  return errorQuantity;
}

function deletePreviousErrors(){
  document.querySelectorAll('.existing-error').forEach(function(existingError){
    existingError.remove();
  });
}
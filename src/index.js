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
    if(regEx.test(userName) === false) return 'The name you inserted is not valid.';

    return false;
  }



/* Floating Action Button Initialization */


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        hoverEnabled: false
    });
  });


  /* Form Validators */


  function validateName(name){
    const regEx = /^[a-z]{10}i$/;
    
    if(name === '') return 'The name field cannot be empty.';
    if(regEx.test(name)) return 'The name you inserted is valid';

    return true;
  }



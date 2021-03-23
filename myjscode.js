$(function () {
    
    $("#myForm").submit(handleFormSubmit);
    
  });

     function onChange() {
        const password = document.querySelector('input[name=password]');
        const confirm_password = document.querySelector('input[name=confirm_password]');
        if (confirm_password.value === password.value) {
            confirm_password.setCustomValidity('');
        } else {
            confirm_password.setCustomValidity('Passwords do not match');
        }
        
      }
      /*  function check() {
        if (document.getElementById('password').value ==
          document.getElementById('confirm_password').value) {
          document.getElementById('message').style.color = 'green';
          document.getElementById('message').innerHTML = 'Password Match';
        } else {
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').innerHTML = 'Password not Match';
        }
      }*/
 function handleFormSubmit(e) {
    
    var email = document.getElementById("email");

    email.addEventListener("input", function (event) {
      if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an e-mail address!");
      } else {
        email.setCustomValidity("");
      }
    });
    alert("Form is being submitted");
   
  }
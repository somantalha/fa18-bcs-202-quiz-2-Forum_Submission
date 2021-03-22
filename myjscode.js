
$(function () {
    $("#myForm").submit(handleFormSubmit);
  });
  $("#myForm"). submit(function(e) {
    e. preventDefault();
    });
 function handleFormSubmit(e) {
    var name = $("#name").val();
    var pass1= $("#password").val();
    var pass2= $("#confirm_password").val();
    var error = document.getElementById("error") 
    if(name.length < 5)
    {
        error.textContent = "Name should be atleast 5 character long!!" 
        error.style.color = "red"
        e. preventDefault();
    }
    else if(pass1 != pass2)
    {
        error.textContent = "Password should be Same!!" 
        error.style.color = "red"
        e. preventDefault();
    }
    else if((pass1.length < 8) || (pass2.length < 8) )
    {
        error.textContent = "Password should be atleast 8 character long!!" 
        error.style.color = "red"
        e. preventDefault();
    }
    else
    {
        error.textContent = "Forum is Submitted successfully!!" 
        error.style.color = "green"
        alert("Form is being submitted");
        e. preventDefault();
        
         
    }
  }
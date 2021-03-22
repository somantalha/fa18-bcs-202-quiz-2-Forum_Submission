
$(function () {
    $("#myForm").submit(handleFormSubmit);
  });
 function handleFormSubmit(e) {
    var name = $("#name").val();
    var pass1= $("#password").val();
    var pass2= $("#confirm_password").val();
    var error = document.getElementById("error") 
    var temp =0;
    if(name.length < 5)
    {
        error.textContent = "Name should be atleast 5 character long!!" 
        error.style.color = "red"
        temp =0; 
    }
    else if(pass1 != pass2)
    {
        error.textContent = "Password should be Same!!" 
        error.style.color = "red"
        temp =0;
    }
    else if((pass1.length < 8) || (pass2.length < 8) )
    {
        error.textContent = "Password should be atleast 8 character long!!" 
        error.style.color = "red"
        temp =0;
    }
    else
    {
        temp =1;
        if(temp==1)
        {
            alert("Form is being submitted");

        }
        
        
    }
  }
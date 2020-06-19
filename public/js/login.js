function validate(){

    let email= document.getElementById('inputEmail').value;
    let pass= document.getElementById('InputPassword1');  
    let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    var passregexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    

   
if(email.value=="")
{
 alert("All fields are required");
 return false;
}
else if(regexp.test(email)==false)
{
  alert("Enter a valid email id");
  return false;
}


if(pass.value=="")
{
 alert("All fields are required");
 return false;
}

else if(passregexp.test(pass.value)==false)
{
  alert("Enter valid password");
  return false;
}

}

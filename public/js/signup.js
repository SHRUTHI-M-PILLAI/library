function validate()
{
    let fname= document.getElementById('FName');
    let lname= document.getElementById('LName');
    let uname= document.getElementById('UserName');
    let phno= document.getElementById('phoneNumber');
    let email= document.getElementById('inputEmail').value;
    let pass= document.getElementById('InputPassword1');
    let cpass= document.getElementById('confirmPassword');
    let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    var phregexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var passregexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   

 
    
    if(fname.value=="")
    {
     alert("All fields are required");
     return false;
}


if(lname.value=="")
    {
     alert("All fields are required");
     return false;
}


if(uname.value=="")
{
 alert("All fields are required");
 return false;
}



if(phno.value=="")
{
 alert("All fields are required");
 return false;
}
else if(phregexp.test(phno.value)==false)
{
  alert("Enter a valid phone number");
  return false;
}


   
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



if(cpass.value=="")
{
 alert("All fields are required");
 return false;
}
else if(pass.value!=cpass.value)
{
  alert("Passwords doesnot match");
  return false;
}
else{
alert("Signup success");
return true;
}

}


let pass= document.getElementById('InputPassword1');
pass.addEventListener('keyup',function(){
    checkPassword(pass.value)
  })
  function checkPassword(password)
  {
      var prog=document.getElementById('prog');
    var strengthBar= document.getElementById('strength');
    var strength=0;
    if(password.match(/[a-zA-Z0-9]+/))
    {
      strength += 1;
  
    }
    if((password.length>=5)&&(password.match(/[a-zA-Z0-9]+/)))
    {
      strength += 1;
  
    }
 
    if((password.length>=8)&&(password.match(/[a-z]+/))&&(password.match(/[A-Z]+/))&&(password.match(/[0-9]+/)))
    {
      strength += 1;
  
    }
    switch(strength)
    {
      case 0: strengthBar.style.width='0%';
              prog.style.visibility='hidden';
              document.getElementById('strength1').style.visibility='hidden';
              break;
      case 1: strengthBar.style.width='30%';
              prog.style.visibility='visible';
              strengthBar.style.backgroundColor='red';
              document.getElementById('strength1').style.visibility='visible';
              document.getElementById('strength1').innerText="Poor"
              document.getElementById('strength1').style.color='red'
              break;
      case 2: strengthBar.style.width='60%';
              prog.style.visibility='visible';
              strengthBar.style.backgroundColor='orange';
              document.getElementById('strength1').style.visibility='visible';
              document.getElementById('strength1').innerText="Medium"
              document.getElementById('strength1').style.color='orange'
              break;
      case 3: strengthBar.style.width='100%';
              prog.style.visibility='visible';
              strengthBar.style.backgroundColor='green';
              document.getElementById('strength1').style.visibility='visible';
              document.getElementById('strength1').innerText="Strong"
              document.getElementById('strength1').style.color='green'
              break;

  }

}
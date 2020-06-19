function validateForm() {
  var x = document.forms["myForm"]["text"].value;
if (x == "") {
  alert("name must be filled out");
  return false;
}

var x = document.forms["myForm"]["address"].value;
if (x == "") {
  alert("address must be filled out");
  return false;
}

var x = document.forms["myForm"]["phone.no"].value;
if (x == "") {
  alert("phone number must be filled out");
  return false;
}



  var x = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Email must be filled out");
    return true;
  }


var x = document.forms["myForm"]["password"].value;
if (x == "") {
  alert("password must be filled out");
  return true;
}
}

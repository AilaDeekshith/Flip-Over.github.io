function validate()
{
  var username=document.getElementById("username").Value;
  var password=document.getElementById("password").Value;
  if(username=="admin" && password=="user")
  {
   
    alert("login successful");
    return false;
  }
  else
  {
    alert("login failed");
  }
}

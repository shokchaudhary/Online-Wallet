function validateForm(username , password)
{
  if(username.value ==  "rahihacker@hack.in" && password.value == "divya@2020")
  {
    var p = document.getElementById("warning");
    p.style.color = 'lightgreen';
    p.innerHTML = "<a href='./option2.html'>Visit Destination </a>";
    p.setAttribute("id" , "nextpage");
    var a = document.querySelectorAll("#nextpage a")[0];
    a.style.color = "lightgreen";
    a.style.textDecoration = "none";
    var p = document.getElementById("warning");
    p.style.color = 'red';
    p.innerHTML = "Invalid Username OR Password";
  }
  else
  {
    console.log("hello");
    var p = document.getElementById("warning");
    p.style.color = 'red';
    p.innerHTML = "Invalid Username OR Password";
  }

}

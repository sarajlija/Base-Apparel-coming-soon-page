//VALIDATION EMAIL
function validateemail()  {  
  var x=document.myform.email.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");

  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length) { 
    
    alert("Please enter a valid e-mail address");  
    document.querySelector(".error").innerHTML = "Please enter a valid e-mail address!";
    document.querySelector(".error").style.color = "red";
    document.querySelector("#error").style.display = "inline-block";

    } 
  else { return alert("Thank you, your email is valid!") }
   
}  


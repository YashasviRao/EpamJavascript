
	function load () {
		document.getElementById('register').style="display:none;";
		document.getElementById('check').value="Register";
	}
	function register () {
	    
		document.getElementById('register').style="height:100%;";
		document.getElementById('error1').innerHTML="";
		document.getElementById('login').style="display:none";
		document.getElementById('check').value="Login";
		
	}
	function login () {
		document.getElementById('register').style="display:none;";
		document.getElementById('login').style="display:block;";
		document.getElementById('check').value="Register";
		isLoginEmpty();
	}
	function check () {
		
		var che= document.getElementById('check').value;
		if(che=="Login")
		{
		document.getElementById('register').style="display:none;";
		document.getElementById('login').style="display:block;";
		document.getElementById('check').value="Register";
		}
		else
		{
			document.getElementById('register').style="height:100%;";
			document.getElementById('login').style="display:none";
			document.getElementById('check').value="Login";
		}
		
	}
	function ValidateEmail(inputText)
    {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
      if(inputText.match(mailformat))
      {
        return true;
       }
      else
      {
        return false;
      }
    }
	function ValidateEmail1(inputText)
    {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
      if(inputText.match(mailformat))
      {
        return true;
       }
      else
      {
        return false;
      }
    }
	function phonenumber(inputtxt)
    {
      var phoneno = /^\d{10}$/;
      if(inputtxt.match(phoneno))
      {
        return true;
      }
     else
      {
        alert("Not a valid Phone Number");
        return false;
      }
    }
    function isLoginEmpty()
	{
		
		var checkEmail=document.getElementById('email').value;
	    var checkPwd=document.getElementById('password').value;
	       
			 if(checkEmail==""||checkPwd=="")
			 { 
  
	 			document.getElementById('error').innerHTML="Fill in all the details";
 
    	     }
			 else 
			 {
			  if(ValidateEmail(checkEmail))
			  {
	            document.getElementById('error').innerHTML="User Logged in!";
				document.getElementById('error').style="color:black";
				
		      }
			  else
			     document.getElementById('error').innerHTML="You have entered an invalid email address!";
		     }
			
	}
	function isRegEmpty()
	{
		var checkEmail=document.getElementById('email1').value;
	    var checkPwd=document.getElementById('password1').value;
		var checkFname=document.getElementById('fname').value;
		var checkMobile=document.getElementById('mob').value;
			
			if(checkEmail==""||checkFname==""||checkPwd==""||checkMobile=="")
			{

				document.getElementById('error1').innerHTML="Fill in all the details";

			}
			else
			{
			 if(phonenumber(checkMobile))
			  if(ValidateEmail1(checkEmail))
			  {
	            document.getElementById('error1').innerHTML="User registered successfully!";
			    document.getElementById('error1').style="color:black"
			  }
			  else
			     document.getElementById('error1').innerHTML="You have entered an invalid email address!";
				 
			}
			
	}

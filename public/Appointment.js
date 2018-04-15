
	function validateForm2() {
		var x = document.forms["myForm"]["fname"].value;
		if (x == "") {
			alert("Name must be filled out");
			return false;
		}
		else
		{
		num= document.forms["myForm"]["telNo"].value;
		name= 'Thanks for filling the details '+document.forms["myForm"]["fname"].value+'\n'+'The registered email-id is '+document.forms["myForm"]["email"].value;
		alert("Thanks for filling the details "+x );
		
		fetch('/',{
			method: 'post',
			headers:{
				'Content-type':'application/json'
			},
			body: JSON.stringify({number: num,name: name})
		})
		.then(function(){
			console.log(res);
		})
		.catch(function(){
			console.log(err);
		});
		
	}
	}
	
	
	function validateForm() {
		var fname = document.forms["myForm"]["fname"].value;
		var lname = document.forms["myForm"]["lname"].value;
		var email = document.forms["myForm"]["email"].value;
		var telNo = document.forms["myForm"]["telNo"].value;
		var preferredDay = document.forms["myForm"]["preferredDay"].value;
		var preferredTime = document.forms["myForm"]["preferredTime"].value;
		if ( fname == "" || lname == "" || email == "" || telNo == ""  || preferredDay == "" || preferredTime == ""){
			if(fname == "")
			{
				document.getElementById('fname').style.borderColor = "red";
			}
			else
				document.getElementById('fname').style.borderColor ="";
				
			if(lname == "")
			{
				document.getElementById('lname').style.borderColor = "red";
			}
			else
				document.getElementById('lname').style.borderColor ="";
			if(email == "")
			{
				document.getElementById('email').style.borderColor = "red";
			}
			else
				document.getElementById('email').style.borderColor ="";
			if(telNo == "")
			{
				document.getElementById('telNo').style.borderColor = "red";
			}
			else
				document.getElementById('telNo').style.borderColor ="";
			if(preferredDay == "")
			{
				document.getElementById('preferredDay').style.borderColor = "red";
			}
			else
				document.getElementById('preferredDay').style.borderColor ="";
			if(preferredTime == "")
			{
				document.getElementById('preferredTime').style.borderColor = "red";
			}
			else
				document.getElementById('preferredTime').style.borderColor ="";
			alert("Please fill the details");
			return false;
			
		}
		else
		{
		//details = new Card(document.forms["myForm"]["fname"].value,document.forms["myForm"]["lname"].value, document.forms["myForm"]["email"].value,document.forms["myForm"]["telNo"].value,document.forms["myForm"]["preferredDay"].value, document.forms["myForm"]["preferredTime"].value);
		num=document.forms["myForm"]["telNo"].value;
		name= document.forms["myForm"]["fname"].value+'\n'+document.forms["myForm"]["lname"].value+'\n'+document.forms["myForm"]["email"].value+'\n'+document.forms["myForm"]["telNo"].value+'\n'+document.forms["myForm"]["preferredDay"].value+'\n'+document.forms["myForm"]["preferredTime"].value;
		console.log(name);
		
		
		fetch('/',{
			method: 'post',
			headers:{
				'Content-type':'application/json'
			},
			body: JSON.stringify({number: num,name: name})
		})
		.then(function(){
			console.log(res);
		})
		.catch(function(){
			console.log(err);
		});
		
		
		alert("Thanks for filling the details ");
		}
		
	}
	

	function PrintCard() {
		line1 = "<b>Name: </b>" + this.name + "<br>\n";
		line2 = "<b>Last Name </b>" + this.lname + "<br>\n";
		line3 = "<b>Email: </b>" + this.email + "<br>\n";
		line4 = "<b>Home Phone: </b>" + this.homephone + "<br>\n";
		line5 = "<b>Preferred Day: </b>" + this.preferredDay + "<br>\n";
		line6 = "<b>Preferred Time: </b>" + this.preferredTime + "<hr>\n";
		//messageFunction(this.homephone);
		return (line1+line2+line3+line4+line5+line6);
	}
	function Card(name,lname,email,home,preferredDay,preferredTime) {
		this.name = name;
		this.lname = lname;
		this.email = email;
		this.homephone = home;
		this.preferredDay = preferredDay;
		this.preferredTime = preferredTime;
		this.PrintCard=PrintCard;
	}
	/*
	function messageFunction(mobNo) {
		var request = new XMLHttpRequest();
		request.onload = function () {
		   var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
		   var data = request.responseText; // Returned data, e.g., an HTML document.
		}
		request.open("POST", "/sendMessage", true);
		request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		var sendData = {};
		sendData.mob = mobNo;
		request.send(sendData);
	}
	*/
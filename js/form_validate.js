$(document).ready(function(){
	$('account-creation').validate({
		rules: {
			name: "required",
			email:{
				required: true;
				email: true
			},
			password: {
				required: true,
				minlength: 5
			},
		messages:
			{
				name: "Please enter your name";
				email: "Please enter valid email";
				password:{
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long"

				}
			}


		} 
	
	});
});
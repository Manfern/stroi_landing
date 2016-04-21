<?php
	require_once('path/to/library/class.phpmailer.php');
	$mail = new PHPMailer();


	$mail->IsSMTP();
	$mail->SMTPAuth = true;
	$mail->Host = "smtp.postmarkapp.com";
	$mail->Port = 26;
	$mail->Username = "#@#@#@#@-####-@@@@-#####-@#@#@#@#@#@#";
	$mail->Password = "#@#@#@#@-####-@@@@-#####-@#@#@#@#@#@#";


	$mail->SetFrom('name@yourdomain.com', 'Web App');
	$mail->Subject = "A Transactional Email From Web App";
	$mail->MsgHTML($body);
	$mail->AddAddress($address, $name);


	if($mail->Send()) {
	  echo "Message sent!";
	} else {
	  echo "Mailer Error: " . $mail->ErrorInfo;
}
?>
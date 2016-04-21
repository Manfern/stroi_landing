<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"]=="POST"){

	// echo "Processing form";
	// var_dump($_POST);
	$name=trim(filter_input(INPUT_POST, "name",FILTER_SANITIZE_STRING));
	$phone=trim(filter_input(INPUT_POST, "phone",FILTER_SANITIZE_STRING));
	// $email=$_POST["email"];
	// echo $name;
	// echo $phone;
	if ($name==""||$phone==""){
		echo "Пожулуйста заполните все поля формы.";
	}
	if ($_POST["adress"]!=""){
		echo "Введены некорректные данные";
		exit;
	}
	

	// require ("class.phpmailer.php");
	// include ("class.smtp.php");
	require 'PHPMailerAutoload.php';
	$mail=new PHPMailer;
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = 'smtp.127.0.0.1';              // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;  
	$mail->Username = 'userid@gmail.com';                 // SMTP username
	$mail->Password = 'secret';                           // SMTP password
	$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 25;                                    // TCP port to connect to 
	$email="ejilur@gmail.com";
	// 3910352@mail.ru
	$email_body="";
	$email_body.="Имя: " . $name . " \n";
	$email_body.="Телефон: " . $phone . " \n";
	$mail->setFrom("client@mail.ru", $name);
	$mail->addAddress($email, 'Admin');     // Add a recipient
	$mail->isHTML(false);   // Set email format to HTML

	$mail->Subject = 'Заяка с сайта Честные потолки ' . $phone;
	$mail->Body    = $email_body;


	if(!$mail->send()) {
	    echo 'Заявка не может быть отправлена';
	    echo 'Ошибка мэйлера: ' . $mail->ErrorInfo;
	} else {
	    echo 'Заяка отправлена';
	    $pageTitle="Спасибо";
			$section=null;
	}

	// echo "<pre>";

	// echo $email_body;
	// echo "</pre>";


 // Send email 

	
}
?>

<div class="section page">
	<h1>Спасибо!</h1>
	<p>Спасибо за заявку, мы скоро с Вами свяжемся.</p>

</div>

</body>
</html>

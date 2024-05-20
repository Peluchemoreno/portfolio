<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$body = $_POST['body'];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();

$mail->SMTPAuth = true;

$mail->Host = 'smtp-relay.brevo.com';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->Username = '7526c5001@smtp-brevo.com';
$mail->Password = 'gF0mSwPk35WZV1Bz';

$mail->setFrom($email, $name);
$mail->addAddress('jmcdmoreno19@aol.com', 'Justin');


$mail->Subject = $subject;
$mail->Body - $body;

$mail->send();

echo 'email sent';

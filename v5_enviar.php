<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$messaje1 = $_POST['messaje1'];
$messaje2 = $_POST['messaje2'];

&header = 'From: ' . $mail . "\r\n";
&header .=  "X-Mailer : PHP/" . phpversion() . " \r\n";
&header .=  "Mime-Version: 1.0 \r\n";
&header .= "Contect-Type: text(plain";

$message = "Este mensaje fue enviado por: " . $name . "\r\n";
 $message .= "Su e-mail es:" . $mail . "\r\n";
 $message .= "Teléfono de contacto:" . $phone . "\r\n";
 $message .= "Asignatura: " . $_POST['mensaje1'] . "\r\n";
 $message .= "Temas: " . $_POST['mensaje2'] . "\r\n";
 $message .= "Envado el: " .date('d/m/Y', time());

 $para = 'ciencias.jaimevalderrama@gmail.com';
 $asunto = 'Solicitud de contenidos multimedia';

 mail($para, $asunto, utf8_decode ($message), $header);

 header("Location:index.html");

?>
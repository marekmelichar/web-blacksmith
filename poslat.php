<?php
$to = "koprivackej@gmail.com";
$extra = "From: ".$_POST['email']."\r\nReply-To: ".$_POST['email']."\r\n";
$subject = "Vzkaz od ".$_POST['name']."";
$mess = "Jméno: ".$_POST['name']."\nEmail: ".$_POST['email']."\nWeb: ".$_POST['web']."\nSubject: ".$_POST['subject']."\nText:\n".$_POST['text']."";
mail ($to, $subject, $mess, $extra);
?>

<html><head>
<meta http-equiv="refresh" content="0; url=index.html">
<title>Přesměrování...</title>
</head><body></body></html>

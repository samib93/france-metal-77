<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Adresse email de destination
    $to = "s_barkaoui@outlook.fr";

    // Entête du mail
    $headers = "From: $email \r\n";
    $headers .= "Reply-To: $email \r\n";
    $headers .= "Content-type: text/html; charset=UTF-8 \r\n";

    // Envoi de l'email
    if (mail($to, $subject, $message, $headers)) {
        echo "Votre message a bien été envoyé.";
    } else {
        echo "Erreur lors de l'envoi du message. Veuillez réessayer.";
    }
}
?>

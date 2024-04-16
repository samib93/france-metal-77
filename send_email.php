<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Adresse email de destination
    $destinataire = "s.barkaoui@outlook.fr";

    // Sujet de l'email
    $sujet = "Nouveau message de $nom";

    // Corps de l'email
    $corps_message = "Nom: $nom\n";
    $corps_message .= "Email: $email\n\n";
    $corps_message .= "Message:\n$message\n";

    // Définir les paramètres SMTP
    ini_set("SMTP", "smtp.office365.com");
    ini_set("smtp_port", "587");

    // En-têtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envoyer l'email
    $resultat = mail($destinataire, $sujet, $corps_message, $headers);

    // Vérifier si l'email a été envoyé avec succès
    if ($resultat) {
        header('Location: confirmation.html');
        exit;
    } else {
        // Erreur lors de l'envoi de l'email
        echo "Erreur lors de l'envoi de l'email";
    }
}
?>

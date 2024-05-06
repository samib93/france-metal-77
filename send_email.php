<?php
// Vérification si le formulaire est soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Destinataire de l'e-mail
    $to = "s.barkaoui@outlook.fr";
    
    // Sujet de l'e-mail
    $subject = "Nouveau message de $name";

    // Construction du corps de l'e-mail
    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // En-têtes de l'e-mail
    $headers = "From: $email";

    // Envoi de l'e-mail
    if (mail($to, $subject, $body, $headers)) {
        // Redirection après l'envoi du formulaire
        header('Location: index.html');
        exit;
    } else {
        // En cas d'échec de l'envoi
        http_response_code(500);
        echo "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.";
    }
} else {
    // En cas d'accès direct au script sans soumission du formulaire
    http_response_code(403);
    echo "Accès interdit.";
}
?>

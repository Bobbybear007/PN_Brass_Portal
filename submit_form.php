<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set the recipient email address
    $to = "andrewzambazos@gmail.com"; // Replace with your email address

    // Set the email subject
    $subject = "New Contact Form Submission";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Send the email
    mail($to, $subject, $email_content);

    // Redirect back to the contact page after submission
    header("Location: contact.html");
    exit;
}
?>

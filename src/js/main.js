emailjs.init("j7rMXmo7TXhULGfEI"); // Replace with your EmailJS User ID

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {
    // Get the form data
    const to = document.querySelector("#to").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    // Send the email using EmailJS
    emailjs.send("service_mgd109v", "template_meb8zzh", {
        to_email: to,
        subject: subject,
        message: message
    })
        .then(function () {
            result.innerHTML = "Email sent successfully!";
            result.style.opacity = 1;
        }, function (err) {
            result.innerHTML = "Email sending failed!";
            result.style.opacity = 1;
            console.log(err);
            alert('Email sending failed try again!')
        });
}
// Inizializza EmailJS
(function() {
    emailjs.init("9sJo4Sy55j7PLd5HC"); // Public Key di EmailJS
})();

// Gestisce l'invio del modulo
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene il comportamento predefinito del modulo

        let form = event.target;
        let isValid = true;

        // Nome
        let fromName = form.querySelector('#from_name');
        if (!fromName.value.trim()) {
            fromName.classList.add('is-invalid');
            isValid = false;
        } else {
            fromName.classList.remove('is-invalid');
        }

        // Email
        let fromEmail = form.querySelector('#from_email');
        if (!fromEmail.value.trim() || !fromEmail.validity.valid) {
            fromEmail.classList.add('is-invalid');
            isValid = false;
        } else {
            fromEmail.classList.remove('is-invalid');
        }

        // Messaggio
        let message = form.querySelector('#message');
        if (!message.value.trim()) {
            message.classList.add('is-invalid');
            isValid = false;
        } else {
            message.classList.remove('is-invalid');
        }

        if (isValid) {
            // Se il modulo è valido, invia l'email
            emailjs.sendForm('service_s9nydla', 'template_ddl21k9', form)
                .then(function(response) {
                    console.log('Email inviata con successo:', response);
                    document.getElementById('form-container').style.display = 'none'; // Nascondi il modulo
                    document.getElementById('confirmation-message').style.display = 'block'; // Mostra il messaggio di conferma
                }, function(error) {
                    console.error('Errore nell\'invio dell\'email:', error);
                    alert('Errore nell\'invio dell\'email.');
                });
        }
    });
});

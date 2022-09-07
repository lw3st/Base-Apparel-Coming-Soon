const emailCont = document.getElementById('email-container');
const emailForm = document.getElementById('email-form');
const errorImg = document.getElementById('error-img');
const submitBtn = document.getElementById('email-submit');
const errorMsg = document.getElementById('error-msg');

function validateEmail() {
    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!errorImg.classList.contains('hidden') && !emailCont.classList.contains('invalid-email')) {
            errorImg.className += ' hidden';
            errorMsg.className += ' hidden';
            emailCont.className += ' invalid-email';
        }
        else {
            errorImg.className.replace('hidden', '');
            errorMsg.className.replace('hidden', '');
            errorMsg.className.replace('invalid-email', '');
        }
    })
}

validateEmail();
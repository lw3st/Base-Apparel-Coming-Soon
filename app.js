// defining elements
const emailCont = document.getElementById('email-container');
const emailForm = document.getElementById('email-form');
const userEmail = document.getElementById('email-input');
const errorImg = document.getElementById('error-img');
const submitBtn = document.getElementById('email-submit');
const errorMsg = document.getElementById('error-msg');
const thanksMsg = document.getElementById('thanks-msg');

// defining email check regex
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// display error/display thank you function

function invalidEmail () {
    if (!thanksMsg.classList.contains('hidden')) {
        thanksMsg.classList.add('hidden');
    }
    
    errorImg.classList.remove('hidden');
    errorMsg.classList.remove('hidden');
    emailCont.classList.add('invalid-email');
}

function showThanks () {
    if (!errorImg.classList.contains('hidden') || !emailCont.classList.contains('invalid-email')) {
        errorImg.classList.add('hidden');
        errorMsg.classList.add('hidden');
        emailCont.classList.remove('invalid-email');
    }

    thanksMsg.classList.remove('hidden');
}

// email validate function
function validateEmail() {
    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
    })

    submitBtn.addEventListener('click', function (event) {
        if (userEmail.value.length === 0 || emailRegEx.test(userEmail.value) === false) {
            invalidEmail();
        } else {
            showThanks();
        }
    })
}

validateEmail();

const emailModal = document.getElementById('emailModal');
const openModalBtn = document.getElementById('btn-quero-conversar');
const closeModalBtn = document.getElementById('closeModalBtn');
const sendEmailBtn = document.getElementById('sendEmailBtn');
const emailMessageTextarea = document.getElementById('emailMessage');

const targetEmail = 'kauafrreira23@gmail.com';

function openModal() {
    emailModal.style.display = 'flex';
}

function closeModal() {
    emailModal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
    if (event.target === emailModal) {
        closeModal();
    }
});

sendEmailBtn.addEventListener('click', function () {
    const subject = "Contato através do Modal da Página";
    const body = emailMessageTextarea.value;

    if (body.trim() === "") {
        alert("Por favor, escreva uma mensagem.");
        return;
    }

    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodedBody}`;

    window.location.href = mailtoLink;
});

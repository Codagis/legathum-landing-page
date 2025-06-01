const emailModal = document.getElementById('emailModal');
const openModalBtn = document.getElementById('btn-quero-conversar');
const openModalBtnInvestidores = document.getElementById('btn-quero-investir');
const closeModalBtn = document.getElementById('closeModalBtn');
const sendEmailBtn = document.getElementById('sendEmailBtn');
const emailMessageTextarea = document.getElementById('emailMessage');
const body = document.body; // Referência ao elemento body

const targetEmail = 'kauafrreira23@gmail.com';

function openModal() {
    emailModal.style.display = 'flex';
    // Desativa o scroll do body
    body.style.overflow = 'hidden';
    // Opcional: Salva a posição atual do scroll
    body.dataset.scrollY = window.scrollY;
}

function closeModal() {
    emailModal.style.display = 'none';
    // Reativa o scroll do body
    body.style.overflow = '';
    // Opcional: Restaura a posição do scroll
    if (body.dataset.scrollY) {
        window.scrollTo(0, parseInt(body.dataset.scrollY));
        delete body.dataset.scrollY;
    }
}

openModalBtn.addEventListener('click', openModal);
openModalBtnInvestidores.addEventListener('click', openModal);
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
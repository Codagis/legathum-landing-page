document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const emailInput = document.getElementById('emailInput');
    const messageArea = document.getElementById('messageArea');
    const buttonText = submitButton.querySelector('.button-text');
    const spinner = submitButton.querySelector('.spinner');
    messageArea.classList.remove('message-area');

    if (!submitButton) {
        console.error("Elemento 'submitButton' não encontrado!");
        return;
    }
    if (!emailInput) {
        console.error("Elemento 'emailInput' não encontrado!");
        return;
    }
    if (!messageArea) {
        console.error("Elemento 'messageArea' não encontrado!");
        return;
    }
    if (!buttonText) {
        console.error("Elemento 'buttonText' (dentro do botão) não encontrado!");
        return;
    }
    if (!spinner) {
        console.error("Elemento 'spinner' (dentro do botão) não encontrado!");
        return;
    }

    function clearMessages() {
        messageArea.classList.remove('message-area');
        messageArea.textContent = '';

    }

    function showMessage(message, type = 'success') {
        clearMessages();
        messageArea.textContent = message;
        if (type === 'error') {
            messageArea.classList.add('message-error');
            emailInput.classList.add('input-error');
        } else if (type === 'success') {
            messageArea.classList.remove('message-error');
            messageArea.classList.add('message-success');
        }
    }

    function setLoadingState(isLoading) {
        if (isLoading) {
            submitButton.disabled = true;
            buttonText.classList.add('hidden');
            spinner.classList.remove('hidden');
        } else {
            submitButton.disabled = false;
            buttonText.classList.remove('hidden');
            spinner.classList.add('hidden');
        }
    }

    submitButton.addEventListener('click', async () => {
        clearMessages();
        const email = emailInput.value.trim();

        if (!email) {
            showMessage('Por favor, insira seu e-mail.', 'error');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            showMessage('Por favor, insira um e-mail válido.', 'error');
            emailInput.focus();
            return;
        }

        setLoadingState(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const response = await fetch('http://localhost:8080/server/api/lista-espera', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email })
            });

            const data = await response.json();

            if (response.ok) {
                showMessage('Inscrição realizada. Aguarde e entraremos em contato em breve pelo e-mail!', 'success');
                emailInput.value = '';
            } else {
                if (response.status === 409 || (data.message && data.message.toLowerCase().includes('email já cadastrado'))) {
                    showMessage('Este e-mail já está cadastrado.', 'error');
                } else {
                    showMessage('Ocorreu um erro ao realizar a inscrição.');
                }
                emailInput.focus();
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            showMessage('Não foi possível conectar ao servidor. Tente novamente mais tarde.', 'error');
            emailInput.focus();
        } finally {
            setLoadingState(false);
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('input-error')) {
            clearMessages();
            messageArea.classList.remove('message-area');
            emailInput.classList.remove('input-error');
        }
    });
});

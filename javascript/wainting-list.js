document.addEventListener('DOMContentLoaded', function () {
    const listaEspera = document.getElementById('listaEspera');
    const submitButton = document.getElementById('submitButton');
    const emailInput = document.getElementById('emailInput');
    const messageArea = document.getElementById('messageArea');
    const buttonText = submitButton.querySelector('.button-text');
    const spinner = submitButton.querySelector('.spinner');

    messageArea.classList.remove('message-area');

    const translations = {
        "pt-br": {
            email_required: "Por favor, insira seu e-mail.",
            email_invalid: "Por favor, insira um e-mail válido.",
            success: "Inscrição realizada. Aguarde e entraremos em contato em breve pelo e-mail!",
            email_exists: "Este e-mail já está cadastrado.",
            request_error: "Ocorreu um erro ao realizar a inscrição.",
            connection_error: "Não foi possível conectar ao servidor. Tente novamente mais tarde."
        },
        "japones": {
            email_required: "メールアドレスを入力してください。",
            email_invalid: "有効なメールアドレスを入力してください。",
            success: "登録が完了しました。後ほどメールでご連絡いたします！",
            email_exists: "このメールアドレスは既に登録されています。",
            request_error: "登録中にエラーが発生しました。",
            connection_error: "サーバーに接続できませんでした。後でもう一度お試しください。"
        },
        "italiano": {
            email_required: "Per favore, inserisci la tua email.",
            email_invalid: "Per favore, inserisci un'email valida.",
            success: "Registrazione completata. Ti contatteremo presto via email!",
            email_exists: "Questa email è già registrata.",
            request_error: "Si è verificato un errore durante la registrazione.",
            connection_error: "Impossibile connettersi al server. Riprova più tardi."
        },
        "holandes": {
            email_required: "Voer alstublieft uw e-mailadres in.",
            email_invalid: "Voer een geldig e-mailadres in.",
            success: "Inschrijving voltooid. We nemen binnenkort contact met je op via e-mail!",
            email_exists: "Dit e-mailadres is al geregistreerd.",
            request_error: "Er is een fout opgetreden bij het registreren.",
            connection_error: "Kan geen verbinding maken met de server. Probeer het later opnieuw."
        },
        "frances": {
            email_required: "Veuillez saisir votre adresse e-mail.",
            email_invalid: "Veuillez saisir une adresse e-mail valide.",
            success: "Inscription réussie. Nous vous contacterons bientôt par e-mail !",
            email_exists: "Cet e-mail est déjà enregistré.",
            request_error: "Une erreur est survenue lors de l'inscription.",
            connection_error: "Impossible de se connecter au serveur. Veuillez réessayer plus tard."
        },
        "espanhol": {
            email_required: "Por favor, introduce tu correo electrónico.",
            email_invalid: "Por favor, introduce un correo electrónico válido.",
            success: "Registro exitoso. ¡Nos pondremos en contacto contigo por correo electrónico pronto!",
            email_exists: "Este correo electrónico ya está registrado.",
            request_error: "Ocurrió un error al registrar.",
            connection_error: "No se pudo conectar con el servidor. Inténtalo de nuevo más tarde."
        },
        "en-us": {
            email_required: "Please enter your email.",
            email_invalid: "Please enter a valid email.",
            success: "Registration successful. We will contact you soon via email!",
            email_exists: "This email is already registered.",
            request_error: "An error occurred while submitting your registration.",
            connection_error: "Could not connect to the server. Please try again later."
        },
        "coreano": {
            email_required: "이메일을 입력해 주세요.",
            email_invalid: "유효한 이메일을 입력해 주세요.",
            success: "등록이 완료되었습니다. 곧 이메일로 연락드리겠습니다!",
            email_exists: "이 이메일은 이미 등록되어 있습니다.",
            request_error: "등록 중 오류가 발생했습니다.",
            connection_error: "서버에 연결할 수 없습니다. 나중에 다시 시도해 주세요."
        },
        "chines": {
            email_required: "请输入您的电子邮件。",
            email_invalid: "请输入有效的电子邮件地址。",
            success: "注册成功。我们将尽快通过电子邮件与您联系！",
            email_exists: "该电子邮件已被注册。",
            request_error: "注册过程中发生错误。",
            connection_error: "无法连接到服务器。请稍后再试。"
        },
        "alemao": {
            email_required: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
            email_invalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
            success: "Anmeldung erfolgreich. Wir werden Sie in Kürze per E-Mail kontaktieren!",
            email_exists: "Diese E-Mail-Adresse ist bereits registriert.",
            request_error: "Bei der Anmeldung ist ein Fehler aufgetreten.",
            connection_error: "Verbindung zum Server fehlgeschlagen. Bitte versuchen Sie es später erneut."
        }
    };

    function t(key) {
        return translations[currentLang]?.[key] || translations['en-us'][key] || key;
    }

    function clearMessages() {
        messageArea.classList.remove('message-error', 'message-success' );
        messageArea.textContent = '';
        emailInput.classList.remove('input-error');
    }

    function showMessage(message, type = 'success', autoClearSeconds = 5) {
        clearMessages();
        messageArea.textContent = message;

        if (type === 'error') {
            messageArea.classList.add('message-error');
            emailInput.classList.add('input-error');
        } else if (type === 'success') {
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
            showMessage(t('email_required'), 'error');
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            showMessage(t('email_invalid'), 'error');
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
                showMessage(t('success'), 'success');
            } else {
                if (response.status === 409 || (data.message && data.message.toLowerCase().includes('email já cadastrado'))) {
                    showMessage(t('email_exists'), 'error');
                } else {
                    showMessage(t('request_error'), 'error');
                }
                emailInput.focus();
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            showMessage(t('connection_error'), 'error');
            emailInput.focus();
        } finally {
            setLoadingState(false);
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.classList.contains('input-error')) {
            clearMessages();
        }
    });
});
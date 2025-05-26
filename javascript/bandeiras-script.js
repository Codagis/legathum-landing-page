const flags = {
  "en-us": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 1235 650"> 
            <rect width="1235" height="650" fill="#b22234"/> 
            <g fill="#fff"> 
            <rect y="50" width="1235" height="50"/> 
            <rect y="150" width="1235" height="50"/> 
            <rect y="250" width="1235" height="50"/> 
            <rect y="350" width="1235" height="50"/> 
            <rect y="450" width="1235" height="50"/> 
            <rect y="550" width="1235" height="50"/> 
            </g> 
            <rect width="494" height="350" fill="#3c3b6e"/> 
            <g fill="#fff"> 
            </g> 
        </svg>`,
  "pt-br": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 720 504"> 
            <rect width="720" height="504" fill="#009b3a"/> 
            <polygon points="360,72 648,252 360,432 72,252" fill="#ffdf00"/> 
            <circle cx="360" cy="252" r="100" fill="#002776"/> 
            <path d="M 260 252 a 100 100 0 0 1 200 0 a 100 100 0 0 1 -200 0" fill="none" stroke="#fff" stroke-width="10"/> 
        </svg>`,
  "japones": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 900 600"> 
            <rect width="900" height="600" fill="#fff"/> 
            <circle cx="450" cy="300" r="180" fill="#bc002d"/> 
        </svg>`,
  "italiano": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 900 600"> 
            <rect width="300" height="600" fill="#009246"/> 
            <rect x="300" width="300" height="600" fill="#fff"/> 
            <rect x="600" width="300" height="600" fill="#ce2b37"/> 
        </svg>`,
  "holandes": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 900 600"> 
            <rect width="900" height="200" fill="#ae1c28"/> 
            <rect y="200" width="900" height="200" fill="#fff"/> 
            <rect y="400" width="900" height="200" fill="#21468b"/> 
        </svg>`,
  "frances": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 900 600"> 
            <rect width="300" height="600" fill="#0055a4"/> 
            <rect x="300" width="300" height="600" fill="#fff"/> 
            <rect x="600" width="300" height="600" fill="#ef4135"/> 
        </svg>`,
  "coreano": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 900 600"> 
            <rect width="900" height="600" fill="#fff"/> 
            <g transform="translate(450,300)"> 
                <circle r="150" fill="#CD2E3A"/> 
                <path d="M0,150A150,150 0 0,0 0,-150A75,75 0 0,1 0,0A75,75 0 0,0 0,150Z" fill="#0047A0"/> 
            </g> 
            <g fill="#000"> 
                <g transform="translate(175,125)"> 
                <rect width="125" height="37.5"/> 
                <rect y="62.5" width="125" height="37.5"/> 
                <rect y="125" width="125" height="37.5"/> 
                </g> 
                <g transform="translate(600,125)"> 
                <rect width="125" height="37.5"/> 
                <rect y="62.5" width="50" height="37.5"/> 
                <rect x="75" y="62.5" width="50" height="37.5"/> 
                <rect y="125" width="125" height="37.5"/> 
                </g> 
                <g transform="translate(175,387.5)"> 
                <rect width="50" height="37.5"/> 
                <rect x="75" y="0" width="50" height="37.5"/> 
                <rect y="62.5" width="125" height="37.5"/> 
                <rect y="125" width="50" height="37.5"/> 
                <rect x="75" y="125" width="50" height="37.5"/> 
                </g> 
                <g transform="translate(600,387.5)"> 
                <rect width="125" height="37.5"/> 
                <rect y="62.5" width="125" height="37.5"/> 
                <rect y="125" width="125" height="37.5"/> 
                </g> 
            </g> 
            </svg>`,
  "chines": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 900 600"> 
            <rect width="900" height="600" fill="#de2910"/> 
            <polygon points="150,100 170,150 120,120 180,120 130,150" fill="#ffde00"/> 
            </svg>`,
  "alemao": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 900 600"> 
            <rect width="900" height="200" fill="#000"/> 
            <rect y="200" width="900" height="200" fill="#dd0000"/> 
            <rect y="400" width="900" height="200" fill="#ffce00"/> 
        </svg>`,
  "espanhol": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 750 500">
            <rect width="750" height="500" fill="#c60b1e"/>
            <rect y="125" width="750" height="250" fill="#ffc400"/>
            </svg>`
};


const languageNames = {
    "en-us": "English",
    "pt-br": "Português",
    "espanhol": "Espanhol",
    "japones": "日本語",
    "italiano": "Italiano",
    "holandes": "Nederlands",
    "frances": "Français",
    "coreano": "한국어",
    "chines": "中文",
    "alemao": "Deutsch"
};

const langButton = document.getElementById('lang-button');
const langList = document.getElementById('lang-list');

let currentLang = localStorage.getItem('lang') || 'en-us';

function renderLangButton() {
    langButton.innerHTML = flags[currentLang];
    langButton.setAttribute('aria-label', `Idioma selecionado: ${languageNames[currentLang]}`);
}

function renderLangList() {
    langList.innerHTML = '';
    for (const [key, name] of Object.entries(languageNames)) {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.setAttribute('tabindex', '0');
        li.dataset.lang = key;
        li.innerHTML = `${flags[key]}<span>${name}</span>`;
        if (key === currentLang) {
            li.style.backgroundColor = 'rgba(255,255,255,0.3)';
        }
        langList.appendChild(li);
    }
}

function toggleLangList() {
    const isShown = langList.classList.toggle('show');
    langButton.setAttribute('aria-expanded', isShown);
    if (isShown) {
        langList.focus();
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    renderLangButton();
    renderLangList();
    langList.classList.remove('show');
    // Chama sua função de troca de idioma
    loadLanguage(lang);
}

// Eventos
langButton.addEventListener('click', () => {
    toggleLangList();
});

langList.addEventListener('click', (e) => {
    if (e.target.closest('li')) {
        const selectedLang = e.target.closest('li').dataset.lang;
        changeLanguage(selectedLang);
    }
});

// Fechar dropdown ao clicar fora
document.addEventListener('click', (e) => {
    if (!langButton.contains(e.target) && !langList.contains(e.target)) {
        langList.classList.remove('show');
        langButton.setAttribute('aria-expanded', 'false');
    }
});

// Teclado para acessibilidade
langList.addEventListener('keydown', (e) => {
    const focusableItems = Array.from(langList.querySelectorAll('li'));
    const index = focusableItems.indexOf(document.activeElement);

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (index + 1) % focusableItems.length;
        focusableItems[nextIndex].focus();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (index - 1 + focusableItems.length) % focusableItems.length;
        focusableItems[prevIndex].focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (document.activeElement.tagName === 'LI') {
            changeLanguage(document.activeElement.dataset.lang);
        }
    } else if (e.key === 'Escape') {
        langList.classList.remove('show');
        langButton.setAttribute('aria-expanded', 'false');
        langButton.focus();
    }
});

// Função loadLanguage que você já tem
function loadLanguage(lang) {
    fetch(`./resources/languages/${lang}.json`)
        .then(response => {
            if (!response.ok) throw new Error(`Erro ao carregar o idioma: ${lang}`);
            return response.json();
        })
        .then(translations => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (translations[key]) {
                    el.innerHTML = translations[key];
                }
            });
        })
        .catch(error => console.error(error));
}

// Inicializa
renderLangButton();
renderLangList();
loadLanguage(currentLang);
const demo = document.getElementById('demo-button');
const voltar = document.getElementById('back-button');

const telaBanner = document.getElementById('tela-banner');
const iphoneBlock = document.getElementById('iphone');

voltar.addEventListener('click', () => {
    recondicionandoRenderizacao();
})

demo.addEventListener('click', () => {
    recondicionandoRenderizacao();
})

function recondicionandoRenderizacao() {

    if (!telaBanner.classList.contains('all-zindex-one')) {
        console.log('Vai ocultar o banner');
        telaBanner.classList.add('all-zindex-one');

    } else {
        telaBanner.classList.remove('all-zindex-one');
    }

    if (iphoneBlock.classList.contains('ocultado')) {
        console.log('Identificou que o iphone está oculto')
        iphoneBlock.classList.remove('ocultado');
        iphoneBlock.classList.add('tela');
        iphoneBlock.classList.add('none-background');
    } else {
        iphoneBlock.classList.add('ocultado');

        iphoneBlock.classList.remove('tela');
        iphoneBlock.classList.remove('none-background');
    }
}
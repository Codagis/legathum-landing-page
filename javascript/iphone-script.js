const demo = document.getElementById('demo-button');
const voltar = document.getElementById('back-button');

const telaBanner = document.getElementById('tela-banner');
const iphoneBlock = document.getElementById('iphone');

const telaOcultaUm = document.getElementById('oculta-com-iphone-um');
const telaOcultaDois = document.getElementById('oculta-com-iphone-dois');
const telaOcultaTres = document.getElementById('oculta-com-iphone-tres');
const telaOcultaQuatro = document.getElementById('oculta-com-iphone-quatro');
const telaOcultaCinco = document.getElementById('oculta-com-iphone-cinco');
const telaOcultaSeis = document.getElementById('oculta-com-iphone-seis');

const video = document.getElementById('demo-video');




demo.addEventListener('click', () => {
    recondicionandoRenderizacao();
})

video.addEventListener('ended', () => {
    recondicionandoRenderizacao();
});

voltar.addEventListener('click', () => {
    video.pause();
    recondicionandoRenderizacao();
});

function recondicionandoRenderizacao() {

    if (!telaBanner.classList.contains('all-zindex-one')) {
        telaBanner.classList.add('all-zindex-one');

    } else {
        telaBanner.classList.remove('all-zindex-one');
    }

    if (iphoneBlock.classList.contains('ocultado')) {
        ocultaDemaisTelas();
        iphoneBlock.classList.remove('ocultado');
        
        iphoneBlock.classList.add('none-background');
    } else {
        iphoneBlock.classList.add('ocultado');
        mostraDemaisTelas()
        iphoneBlock.classList.remove('none-background');
    }
}

function ocultaDemaisTelas() {
    telaOcultaUm.classList.add('ocultado');
    telaOcultaDois.classList.add('ocultado');
    telaOcultaTres.classList.add('ocultado');
    telaOcultaQuatro.classList.add('ocultado');
    telaOcultaCinco.classList.add('ocultado');
    telaOcultaSeis.classList.add('ocultado');
}

function mostraDemaisTelas() {
    telaOcultaUm.classList.remove('ocultado');
    telaOcultaDois.classList.remove('ocultado');
    telaOcultaTres.classList.remove('ocultado');
    telaOcultaQuatro.classList.remove('ocultado');
    telaOcultaCinco.classList.remove('ocultado');
    telaOcultaSeis.classList.remove('ocultado');
}
import { clear, adicionarOperacao, digitar, realizarCalculo } from "./calculate.js";

const botoes = document.querySelectorAll('button');

function addEvent() {
    for (let botao of botoes) {
        if (!isNaN(Number(botao.id)) || botao.id === 'inverter') {
            botao.addEventListener('click', digitar)
        }
        if (botao.id === 'clear') {
            botao.addEventListener('click', clear)
        }
        
        if (botao.id === 'igual') {
            botao.addEventListener('click', realizarCalculo)
        }

        if (botao.getAttribute('class').includes('operator')) {
            botao.addEventListener('click', adicionarOperacao)
        }
    }
}

window.addEventListener('load', addEvent)

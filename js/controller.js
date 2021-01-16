const botoes = document.querySelectorAll('button');

function addEvent() {
    for (let botao of botoes) {
        if (botao.id === 'clear') {
            botao.addEventListener('click', clear)
        }

        if (botao.id === 'inverter') {
            botao.addEventListener('click', inverter)

        }
        
        if (botao.id === 'igual') {
            botao.addEventListener('click', realizarCalculo)
        }else {
            botao.addEventListener('click', acionarBotao)
        }
    }
}

window.addEventListener('load', addEvent)

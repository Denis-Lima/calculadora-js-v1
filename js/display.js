const display = document.querySelector('#resultado')
const operacao = document.querySelector('#operacao')

function atualizarDisplay(conteudo, paragrafo) {
   if (conteudo.length) {
      paragrafo.textContent = conteudo
   } else {
      paragrafo.textContent = '0'
   }
}

export {
   display,
   operacao,
   atualizarDisplay
}
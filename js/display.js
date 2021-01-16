const display = document.querySelector('#resultado')
const operacao = document.querySelector('#operacao')

let valor1 = 0
let operador = ''
let valor2 = 0
let numero_atual = ''
let index = 0
let string_calculos = ''
let string_display = '0'

function atualizarDisplay(conteudo, paragrafo) {
   if (conteudo.length) {
      paragrafo.textContent = conteudo
   } else {
      paragrafo.textContent = '0'
   }
}
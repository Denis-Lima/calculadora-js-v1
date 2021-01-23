import { atualizarDisplay, display, operacao } from './display.js'

let valor_atual = ''
let negativo = false
let operacoes = ''
let limpar_op = false

function inverter(num) {
    if (Number(num) === 0) {
        return num
    }
    negativo = !negativo

    if (negativo) {
        num = '-' + num
    } else {
        num = num.replace('-','')
    }
    
    return num
}

function digitar() {
    if (this.id === 'inverter') {
        valor_atual = display.textContent
        valor_atual = inverter(valor_atual.toString())
    } else {
        if (limpar_op) {
            atualizarDisplay(' ', operacao)
            limpar_op = false
        }
        if (this.id === 'ponto') {
            if (!(valor_atual.startsWith('0')) && !(valor_atual.includes('.')) && valor_atual.length) {
                valor_atual += '.'
            }
        } else {
            valor_atual += this.id
        }
    }
    if (valor_atual) atualizarDisplay(Number(valor_atual).toString(), display)
}

function clear() {
    valor_atual = ''
    negativo = false
    operacoes = ''
    limpar_op = false

    atualizarDisplay('0', display)
    atualizarDisplay(' ', operacao)
}
function verificarUltimo (classe) {
    if (classe === 'operator') {
        return 0
    }
    return 1
}

function realizarCalculo(params) {
    
}

export {
    digitar,
    clear,
    inverter,
    realizarCalculo
}
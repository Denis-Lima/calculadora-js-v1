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

function adicionarOperacao() {
    limpar_op = false
    operacoes += ' ' + display.textContent.toString() + ' ' + this.id
    atualizarDisplay(operacoes, operacao)
    valor_atual = ''
}

function apagar() {
    console.log(valor_atual)
    if (valor_atual) {
        valor_atual = valor_atual.substring(0, valor_atual.length - 1)
        console.log(valor_atual)
        atualizarDisplay(valor_atual, display)
    } else {
        atualizarDisplay('0', display)
    }
    return
}
function pegarResultado() {
    if (operacao.textContent.includes('=')) return
    operacoes = operacao.textContent + ' ' + display.textContent
    let lista = operacoes.trim().replaceAll(' ',',').split(',')
    operacoes += ' ='
    atualizarDisplay(operacoes, operacao)
    let resultado = realizarCalculo(lista)
    atualizarDisplay(resultado, display)
    valor_atual = ''
    negativo = false
    operacoes = ''
    limpar_op = true
}

function calcular(v1, op, v2) {
    if (op === '+') { return Number(v1) + Number(v2)}
    if (op === '-') { return Number(v1) - Number(v2)}
    if (op === '*') { return Number(v1) * Number(v2)}
    if (op === '/') { return Number(v1) / Number(v2)}
    if (op === '^') { return Number(v1) ** Number(v2)}
}

function realizarCalculo(lista) {
    console.log(lista)
    if (lista.length <= 1) {
        return lista
    }
    let index
    
    let aux = lista
    if (aux.toString().replaceAll(',','').search(/[\^]/) !== -1) {
        index = aux.indexOf('^')
        let res = calcular(aux[index-1], aux[index], aux[index+1])
        aux.splice(index-1, 3, res)
        return realizarCalculo(aux)
    }
    if (aux.toString().replaceAll(',','').search(/[\*\/]/) !== -1) {
        index = aux.indexOf('*') === -1 ? aux.indexOf('/') : aux.indexOf('*')
        let res = calcular(aux[index-1], aux[index], aux[index+1])
        aux.splice(index-1, 3, res)
        return realizarCalculo(aux)
    } else {
        if (aux.toString().replaceAll(',','').search(/[\+\-]/) !== -1) {
            index = aux.indexOf('+') === -1 ? aux.indexOf('-') : aux.indexOf('+')
            console.log(index)
            let res = calcular(aux[index-1], aux[index], aux[index+1])
            aux.splice(index-1, 3, res)
            return realizarCalculo(aux)
        }
    }
    return aux
}

export {
    digitar,
    clear,
    inverter,
    realizarCalculo,
    adicionarOperacao,
    pegarResultado,
    apagar
}
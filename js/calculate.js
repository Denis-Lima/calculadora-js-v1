const result = document.querySelector('#igual')

function tratarId(id, numero) {
    if (!isNaN(Number(id)) && !(Number(id) === 0)) {
        numero += id
        return numero
    }

    if (Number(id) === 0) {
        if (numero.length !== 0) {
            numero += id
        }
        if (operador) {
            operador = ''
        }
        return numero
    }
    
    if (id === 'ponto') {
        if (numero.length === 0 && valor1 === 0) {
            numero = '0.'
        } else {
            numero += '.'
        }
        return numero
    }

    if (id === 'potencia') {
        
    }

    if (id === 'ponto') {
        return '.'
    }

    if (!valor1) {
        valor1 = Number(numero)
        numero = ''
    }

    if (id === 'dividir') {
        operador = '÷'
    }

    if (id === 'multiplicar') {
        operador = 'x'
    }

    if (id === 'subtrair') {
        operador = '-'
    }

    if (id === 'somar') {
        operador = '+'
    }
    string_calculos += valor1 + operador
    atualizarDisplay (string_calculos.toString(), operacao)
    return ''
}

function calcular(v1, op, v2) {
    if (op === 'x') { return Number(v1) * Number(v2)}
    if (op === '+') { return Number(v1) + Number(v2)}
    if (op === '-') { return Number(v1) - Number(v2)}
    if (op === '÷') { return Number(v1) / Number(v2)}
}

function acionarBotao() {
    if (this.id === 'clear') {
        clear()
    } else {
        numero_atual = tratarId(this.id, numero_atual.toString())
        string_display = numero_atual
        if (numero_atual) {
            atualizarDisplay (Number(string_display).toString(), display)
        }
    }
}

function realizarCalculo() {
    console.log(valor1, operador)
    if (valor1 && operador) {
        valor2 = display.textContent
        string_display = calcular(valor1, operador, valor2)
        valor1 = valor2
        operador = ''
        valor2 = 0
        numero_atual = ''
        console.log(string_display)
        atualizarDisplay (string_display.toString(), display)
    }
}

function clear() {
    res = 0
    valor1 = 0
    operador = ''
    valor2 = 0
    numero_atual = ''
    index = 0
    string_calculos = ''
    string_display = '0'
    atualizarDisplay('0', display)
    atualizarDisplay(' ', operacao)
}

function inverter(params) {
    
}

function verificarUltimo (classe) {
    if (classe === 'operator') {
        return 0
    }
    return 1
}
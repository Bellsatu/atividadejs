function calculadora(valor1, operador, valor2) {
    if (operador === '+') {
        return valor1 + valor2;
    } else if (operador === '-') {
        return valor1 - valor2;
    } else if (operador === '*') {
        return valor1 * valor2;
    } else if (operador === '/') {
        if (valor2 !== 0) {
            return valor1 / valor2;
        } else {
            return 'Erro: divisão por zero';
        }
    } else {
        return 'Operador inválido';
    }
}

// Exemplos
console.log(calculadora(1, '+', 1)); // Saída: 2
console.log(calculadora(1, '-', 1)); // Saída: 0
console.log(calculadora(1, '*', 1)); // Saída: 1
console.log(calculadora(1, '/', 1)); // Saída: 6

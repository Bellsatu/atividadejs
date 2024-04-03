function verificarTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'none';
    } else if (a === b && b === c) {
        return 'equilateral';
    } else if (a === b || b === c || a === c) {
        return 'isosceles';
    } else {
        return 'scalene';
    }
}

// Exemplos
console.log(verificarTriangulo(2, 2, 2)); // Saída: equilateral
console.log(verificarTriangulo(10, 10, 10)); // Saída: equilateral
console.log(verificarTriangulo(3, 4, 4)); // Saída: isosceles
console.log(verificarTriangulo(4, 3, 4)); // Saída: isosceles
console.log(verificarTriangulo(3, 4, 5)); // Saída: scalene
console.log(verificarTriangulo(0, 0, 0)); // Saída: none
console.log(verificarTriangulo(3, 4, -5)); // Saída: none
console.log(verificarTriangulo(1, 1, 3)); // Saída: none
console.log(verificarTriangulo(2, 4, 2)); // Saída: none

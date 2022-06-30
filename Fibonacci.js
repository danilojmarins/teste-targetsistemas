// Exercício 2 - Fibonacci

const sequenciaFibonacci = [0, 1];

function isFibonacciNumber(num) {

    let lastIndex = sequenciaFibonacci.length - 1;
    let lastButOneIndex = sequenciaFibonacci.length - 2;

    if (num === 0 || num === 1) {
        return console.log("Número: " + num + " pertence a sequência de Fibonacci");
    }

    while (sequenciaFibonacci[lastIndex] <= num) {

        let nextNumber = sequenciaFibonacci[lastIndex] + sequenciaFibonacci[lastButOneIndex];

        sequenciaFibonacci.push(nextNumber);

        lastIndex = sequenciaFibonacci.length - 1;
        lastButOneIndex = sequenciaFibonacci.length - 2;

        if (nextNumber === num) {
            return console.log("Número: " + num + " pertence a sequência de Fibonacci");
        }
    }

    return console.log("Número: " + num + " não pertence a sequência de Fibonacci");
    
}

isFibonacciNumber(0);

isFibonacciNumber(1);

isFibonacciNumber(5);

isFibonacciNumber(4);

isFibonacciNumber(13);

isFibonacciNumber(22);
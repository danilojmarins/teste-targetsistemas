// Exercício 5 - Inverte String

function InverteString(string) {

    let stringInvertida = "";

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida = stringInvertida.concat(string.charAt(i));
    }

    console.log(string);
    console.log(stringInvertida);
}

InverteString("Banana");

InverteString("Hello World");

InverteString("socorram me subi no onibus em marrocos");
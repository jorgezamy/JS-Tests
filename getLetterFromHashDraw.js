const letterPatterns = {
    'A': [
        "  #  ",
        " # # ",
        "#####",
        "#   #",
        "#   #"
    ],
    'B': [
        // Patrón para la letra B
    ],
    // Agrega más letras aquí
};

function identifyLetter(input) {
    
    console.log("let", JSON.stringify(letterPatterns, null,2))
    for (let letter in letterPatterns) {

        // console.log("json", JSON.stringify(letterPatterns[letter]))
        // console.log("json", JSON.stringify(input))

        if (JSON.stringify(letterPatterns[letter]) === JSON.stringify(input)) {
            return letter;
        }
    }
    return "No match found";
}

// Ejemplo de uso
const inputLetter = [
    "  #  ",
    " # # ",
    "#####",
    "#   #",
    "#   #"
];

console.log(identifyLetter(inputLetter)); // Debería imprimir 'A'

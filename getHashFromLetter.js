const letterPatterns = {
    'A': [
        "  #  ",
        " # # ",
        "#####",
        "#   #",
        "#   #"
    ],
    'B': [
        "#### ",
        "#   #",
        "#### ",
        "#   #",
        "#### "
    ],
    // Agrega más letras aquí
};

function getLetterPattern(letter) {
    // Convierte la letra a mayúsculas para asegurar que coincida con las claves del objeto
    const upperCaseLetter = letter.toUpperCase();
    
    // Verifica si la letra existe en el objeto
    if (letterPatterns[upperCaseLetter]) {
        return letterPatterns[upperCaseLetter];
    } else {
        return "Pattern not found"; // Mensaje en caso de que la letra no exista en el objeto
    }
}

// Ejemplo de uso
const letter = 'A';
const pattern = getLetterPattern(letter);

// Imprimir el patrón gráfico
if (typeof pattern === 'string') {
    console.log(pattern); // Imprime el mensaje si no se encuentra el patrón
} else {
    pattern.forEach(line => console.log(line)); // Imprime cada línea del patrón gráfico
}

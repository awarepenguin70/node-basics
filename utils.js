// Define the function
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celciustofarenheit(celcius) {
    return (celcius * 9)/5+32;
}

// Export the function
module.exports = { generateRandomNumber ,celciustofarenheit };

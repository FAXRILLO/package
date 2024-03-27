const reverseString = (str) => {
    let result = "";
    for (const letter of str) {
        result = letter + result
    }
    return result
}



function plus (a, b) {
    return a ** b
}
module.exports = {reverseString, plus};


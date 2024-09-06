//No modifiques las funciones aquí, solo mira lo que devuelven.

function getNumber(){
    return 1 + 1;
};

function getResult(a, b, c) {
    return b - a + 4 * c;
};

function getString(n, m) {
    return `Son ${m} y ${n}`;
};

function getLength(name) {
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/length
    if (name.length <= 4) {
        return "too short";
    } else if (name.length < 7) {
        return "adecquate";
    } else if (name.length < 12) {
        return "long";
    } else {
        return "very long";
    }
};

export { getNumber, getResult, getString, getLength };
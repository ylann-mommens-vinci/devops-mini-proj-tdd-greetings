function greet(name) {
    if (isNullUndefinedOrEmpty(name)) return 'Hello, my friend.'
    if (Array.isArray(name)) {
        if (isMixedCaseArray(name)) return mixedCaseArray(name);
        return greetArray(name);
    }
    if (isInUpperCase(name)) return `HELLO, ${name}!`
    return `Hello, ${name}.`
}

function isNullUndefinedOrEmpty(name) {
    return name === null || name === undefined || name === '';
}
function isInUpperCase(name) {
    return name === name.toUpperCase()
}
function isMixedCaseArray(names) {
    return names.some(name => !isInUpperCase(name)) && names.some(isInUpperCase);
}


function greetArray(names){
    const lastName = names.pop();
    return `Hello, ${names.join(', ')} and ${lastName}.`;
}

function mixedCaseArray(names) {
    const normalNames = [];
    const uppercaseNames = [];

    // Séparer les noms en deux catégories
    names.forEach(name => {
        if (name === name.toUpperCase()) {
            uppercaseNames.push(name);
        } else {
            normalNames.push(name);
        }
    });

    // Construire les salutations pour les deux catégories
    const normalGreeting = `Hello, ${normalNames.join(' and ')}.`;
    const uppercaseGreeting = `AND HELLO ${uppercaseNames.join(' ')} !`;

    return `${normalGreeting} ${uppercaseGreeting}`;
}

module.exports = greet
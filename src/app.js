function greet(name) {
    let result = 'Hello, '
    if (isNullUndefinedOrEmpty(name)) return 'Hello, my friend.'
    if (Array.isArray(name)) {
        if (isMixedCaseArray(name)) return mixedCaseArray(name);
        return greetArray(name);
    }
    if (isInUpperCase(name)) return `HELLO, ${name}!`
    return `Hello, ${name}.`
}

function isNullUndefinedOrEmpty(name) {
    if (name === undefined) return true
    if (name === null) return true
    if (name === "" || name==='') return true
    return false
}
function isInUpperCase(name) {
    return name === name.toUpperCase()
}
function isMixedCaseArray(names) {
    return names.some(name => !isInUpperCase(name)) && names.some(isInUpperCase);
}


function greetArray(names){
    let defaultValueArray = 'Hello, '
    if (names.length === 2) return `Hello, ${names[0]} and ${names[1]}.`
        if (names.length > 2) {
            let result = defaultValueArray
            for (let i = 0; i < names.length; i++) {
                if (i === names.length - 1) {
                    result += `and ${names[i]}.`
                } else {
                    result += `${names[i]}, `
                }
            }
            return result
        }
}
function mixedCaseArray(names, language) {
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

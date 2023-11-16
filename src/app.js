function greet(name) {
    if (isUndefined(name)) return 'Hello, my friend.'
    if (isNull(name)) return 'Hello, my friend.'
    return `Hello, ${name}.`
}

function isUndefined(name) {
    return name === undefined
}

function isNull(name) {
    return name === null
}
module.exports = greet

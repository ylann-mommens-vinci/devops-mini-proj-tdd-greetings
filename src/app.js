function greet(name) {
    if (isUndefined(name)) return 'Hello, my friend.'
    return `Hello, ${name}.`
}

function isUndefined(name) {
    return name === undefined
}
module.exports = greet

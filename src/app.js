function greet(name) {
    if (isNullUndefinedOrEmpty(name)) return 'Hello, my friend.'
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
module.exports = greet

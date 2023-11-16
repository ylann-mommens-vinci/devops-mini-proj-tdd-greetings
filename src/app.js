function greet(name) {
    if (isNullUndefinedOrEmpty(name)) return 'Hello, my friend.'
    return `Hello, ${name}.`
}

function isNullUndefinedOrEmpty(name) {
    if (name === undefined) return true
    if (name === null) return true
    if (name === "" || name==='') return true
    return false
}

module.exports = greet

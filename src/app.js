function greet(name) {
    let result = 'Hello, '
    if (isNullUndefinedOrEmpty(name)) return 'Hello, my friend.'
    if (Array.isArray(name)){
        if (name.length === 2) return `Hello, ${name[0]} and ${name[1]}.`
        if (name.length > 2) {
            for (let i = 0; i < name.length; i++) {
                if (i === name.length - 1) {
                    result += `and ${name[i]}.`
                } else {
                    result += `${name[i]}, `
                }
            }
            return result
        }
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

module.exports = greet

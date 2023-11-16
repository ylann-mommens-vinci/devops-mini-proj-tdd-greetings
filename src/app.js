function greet(name) {
    let result = 'Hello, '
    if (isNullUndefinedOrEmpty(name)) return 'Hello, my friend.'
    if (Array.isArray(name)) return greetArray(name) 
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

module.exports = greet

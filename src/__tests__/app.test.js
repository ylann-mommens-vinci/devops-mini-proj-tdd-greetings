const greet = require('../app.js')

test('should return "Hello name"', () => {
    const result = greet('Luca')

    expect(result).toEqual('Hello, Luca.')
})

test("should return 'Hello, my friend.'", () => {
    const result = greet()
    expect(result).toEqual('Hello, my friend.')
})

test("should return 'Hello, my friend.'", () => {
    const result = greet(null)

    expect(result).toEqual('Hello, my friend.')
})
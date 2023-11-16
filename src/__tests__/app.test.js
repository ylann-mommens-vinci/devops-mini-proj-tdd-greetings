const greet = require('../app.js')

test('should return "Hello name"', () => {
    const result = greet('Luca')

    expect(result).toEqual('Hello, Luca.')
})

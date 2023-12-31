const greet = require("../src/app.js");

test('should return "Hello name"', () => {
    const result = greet("Luca");

    expect(result).toEqual("Hello, Luca.");
});

test("should return 'Hello, my friend.'", () => {
    const result = greet();

    expect(result).toEqual("Hello, my friend.");
});

test("should return 'Hello, my friend.'", () => {
    const result = greet(null);

    expect(result).toEqual("Hello, my friend.");
});

test("should return 'Hello, my friend.'", () => {
    const result = greet("");

    expect(result).toEqual("Hello, my friend.");
});

test("should return 'HELLO, JERRY!.'", () => {
    const result = greet("JERRY");

    expect(result).toEqual("HELLO, JERRY!");
});

test("should return 'Hello, Jill and Jane.'", () => {
    const names = ["Jill", "Jane"];

    const result = greet(names);

    expect(result).toEqual("Hello, Jill and Jane.");
});

test("should return 'Hello, Amy, Brian, and Charlotte.'", () => {
    const names = ["Amy", "Brian", "Charlotte"];

    const result = greet(names);

    expect(result).toEqual("Hello, Amy, Brian and Charlotte.");
});

test("should return 'Hello, Amy, Brian, Maxime and Charlotte.'", () => {
    const names = ["Amy", "Brian", "Maxime", "Charlotte"];

    const result = greet(names);

    expect(result).toEqual("Hello, Amy, Brian, Maxime and Charlotte.");
});

test("should return 'Hello, Amy and Charlotte. AND HELLO BRIAN !'", () => {
    const names = ["Amy", "BRIAN", "Charlotte"];
    const result = greet(names);

    expect(result).toEqual("Hello, Amy and Charlotte. AND HELLO BRIAN !");
});

test("should return 'Bonjour Kratos et Thanathos.'", () => {
    const names = ["Kratos", "Thanathos", "fr"];

    const result = greet(names);

    expect(result).toEqual("Bonjour Kratos et Thanathos.");
});

test("should return 'Bonjour Marie.'", () => {
    const names = ["Marie", "fr"];

    const result = greet(names);

    expect(result).toEqual("Bonjour Marie.");
});

test("should return 'Hello Kratos and Thanathos.'", () => {
    const names = ["Kratos", "Thanathos", "en"];

    const result = greet(names);

    expect(result).toEqual("Hello Kratos and Thanathos.");
});

test("should return 'Hallo Kratos en Thanathos.'", () => {
    const names = ["Kratos", "Thanathos", "nl"];

    const result = greet(names);

    expect(result).toEqual("Hallo Kratos en Thanathos.");
});

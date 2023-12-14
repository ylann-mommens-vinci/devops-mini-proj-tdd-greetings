module.exports = {
    env: {
        /* node , not browser */
        node: true,
        // commonjs ... modules.exports use
        commonjs: true,
        es2021: true,
        jest: true,
    },
    /* rules present in eslint : recommended
     https://eslint.org/docs/latest/rules
    */

    extends: "eslint:recommended",
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        indent: ["error", 4],
        semi: ["error", "always"],
        "semi-style": ["error", "last"],
    },
};

const RuleTester = require('eslint').RuleTester;
const rule = require('../../lib/rules/classnames'); // Substitua pelo caminho correto para o seu arquivo de regra

const ruleTester = new RuleTester({
    parser: require.resolve('babel-eslint'),
    parserOptions: {
        ecmaVersion: 2020, // Permite parsing de código moderno ECMAScript
        sourceType: 'module', // Permite o uso de imports e exports
        ecmaFeatures: {
            jsx: true, // Permite parsing de JSX
        },
    },
});

ruleTester.run('deprecate/classnames', rule, {
    valid: [
        {
            code: '<div className="valid-class" />',
            options: [{ name: 'deprecated', use: 'new-class' }],
        },
        {
            code: '<div className="valid-class-1 valid-class-2" />',
            options: [{ names: ['deprecated-1', 'deprecated-2'], use: 'new-class' }],
        },
        {
            code: '<div className="valid-class-1 valid-class-2" />',
            options: [{ nameRegExp: /^tw-/, use: 'new-class' }],
        },
    ],
    invalid: [
        {
            code: '<div className="deprecated" />',
            errors: [{ message: 'Class name "deprecated" is deprecated. Use "new-class" instead' }],
            options: [{ name: 'deprecated', use: 'new-class' }],
        },
        {
            code: '<div className="deprecated-1 deprecated-2" />',
            errors: [
        { message: 'Class name "deprecated-1" is deprecated. Use "new-class" instead' },
        { message: 'Class name "deprecated-2" is deprecated. Use "new-class" instead' },
            ],
            options: [{ names: ['deprecated-1', 'deprecated-2'], use: 'new-class' }],
        },
        {
            code: '<div className="tw-deprecated-1 tw-deprecated-2" />',
            errors: [
        { message: 'Class name "tw-deprecated-1" is deprecated. Use "new-class" instead' },
        { message: 'Class name "tw-deprecated-2" is deprecated. Use "new-class" instead' },
            ],
            options: [{ nameRegExp: /^tw-/, use: 'new-class' }],
        },
    ],
});

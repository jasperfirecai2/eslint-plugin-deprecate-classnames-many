# !!This fork is now obsolete!!

**as of version 1.1 of [eslint-plugin-deprecate-classnames](https://github.com/juanpinheiro/eslint-plugin-deprecate-classnames) , multiple rules are supported out of the box. this fork adds no further features and has not updated the dependencies, unlike the source. please install the source version instead.**

## How to migrate

1. Install `eslint-plugin-deprecate-classnames` version 1.1.0 or newer
2. Rename all instances of `deprecate-classnames-many` to `deprecate-classnames` in your eslint config
3. Update your rules like the example below

```diff
-    "deprecate-classnames-many/classnames": [
+    "deprecate-classnames/classnames": [
        "error", 
-        {
-            "disAllow": [
                {"nameRegExp": "^test-foo-", "use": "new-foo-"}
                {"nameRegExp": "^test-bar-", "use": "new-bar-"}
-            ]
-        }
    ]
=>
    "deprecate-classnames/classnames": [
        "error",
        {"nameRegExp": "^test-foo-", "use": "new-foo-"}
        {"nameRegExp": "^test-bar-", "use": "new-bar-"}
    ]
```

## eslint-plugin-deprecate-classnames-many

[![NPM version](http://img.shields.io/npm/v/eslint-plugin-deprecate-classnames-many.svg)](https://www.npmjs.com/package/eslint-plugin-deprecate-classnames-many)
![downloads](https://img.shields.io/npm/dm/eslint-plugin-deprecate-classnames-many.svg)

This plugin helps you refactor your codebase by identifying and replacing deprecated css class names.

## Installation

First, you'll need to install [ESLint](http://eslint.org):

```sh
npm install eslint --save-dev
```

Next, install eslint-plugin-deprecate-classnames-many:

```sh
npm install eslint-plugin-deprecate-classnames-many --save-dev
```

## Usage

Add deprecate-classnames to the plugins section of your .eslintrc configuration file. You can omit the eslint-plugin- prefix:

```json
{
    "plugins": [
        "deprecate-classnames-many"
    ]
}
```

### v9 Flat config

```js

import eslintPluginDeprecateClassnames from "eslint-plugin-deprecate-classname-many";

export default [
    {
        plugins: {
            "deprecate-classnames-many": eslintPluginDeprecateClassnames,
        },
    }
]
```

Then configure the rules you want to use under the rules section.

## Rule: `classnames`

This rule identifies the use of deprecated class names in your JSX/TSX files and suggests alternatives.

### Examples

Given the following JSX code:

```jsx
<div className="test-classname test-classname-2" />
```

### Specific classnames

```json
{
    "rules": {
        "deprecate-classnames-many/classnames": ["error",{
            "disAllow": [
                {"name": "test-classname", "use": "new-classname"}
            ]
        }]
    }
}
```

### Multiple classnames

```json
{
    "rules": {
        "deprecate-classnames-many/classnames": ["error", {
            "disAllow": [
                {"names": ["test-classname", "test-classname-2"], "use": "new-classname"}
            ]
        }]
    }
}
```

### Regular expression for classnames

```json
{
    "rules": {
        "deprecate-classnames-many/classnames": ["error", {
            "disAllow": [
                {"nameRegExp": "^test-", "use": "new-classname"}
            ]
        }]
    }
}
```

### Multiple rules

```json
{
    "rules": {
        "deprecate-classnames-many/classnames": ["error", {
            "disAllow": [
                {"nameRegExp": "^test-foo-", "use": "new-foo-"}
                {"nameRegExp": "^test-bar-", "use": "new-bar-"}
            ]
        }]
    }
}
```

<small>note: this is not supported yet for the `classes` rule</small>

## Rule: `classes`

This rule identifies the use of deprecated class names within the [classes prop used in Material-UI components](https://v4.mui.com/customization/components/#overriding-styles-with-classes) and suggests alternatives.

### Class Examples

Given the following JSX code:

```jsx
<div classes={{ root: "test-classname test-classname-2" }} />
```

### Specific classes

```json
{
    "rules": {
        "deprecate-classnames-many/classes": ["error",
            {"name": "test-classname", "use": "new-classname"}
        ]
    }
}
```

### Multiple classes

```json
{
    "rules": {
        "deprecate-classnames-many/classes": ["error",
            {"names": ["test-classname", "test-classname-2"], "use": "new-classname"}
        ]
    }
}
```

### Regular expression for classes

```json
{
    "rules": {
        "deprecate-classnames-many/classes": ["error",
            {"nameRegExp": "^test-", "use": "new-classname"}
        ]
    }
}
```

### Summary

[eslint-plugin-deprecate-classnames-many](https://www.npmjs.com/package/eslint-plugin-deprecate-classnames-many) is a powerful tool for maintaining a clean and up-to-date code base by ensuring deprecated class names are systematically identified and replaced. This is especially useful for large teams and during major refactoring efforts. By integrating this plugin, you can automate the enforcement of class name conventions and improve code quality.

For more information, visit the [npm package page](https://www.npmjs.com/package/eslint-plugin-deprecate-classnames-many).

## Credits

This fork is an extension of [eslint-plugin-deprecate-classnames](https://github.com/juanpinheiro/eslint-plugin-deprecate-classnames). Which at the time of making this, did not include support for multiple rules.

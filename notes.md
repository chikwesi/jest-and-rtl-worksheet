# Learning Notes

## Getting Started with Jests

### Jest Options

watching
: `npm test -- --watch`

test single file
: `npm test [file-name]`

tests that match a pattern
: `npm test -- -t [pattern]`

coverage
: `npm test -- --coverage`

---

### Naming

Group tests with describe
```js
describe("[group name]", () => {

})
```

---

### Debuging

test.skip
test.only
console.log
vscode debugger

---

### Configuring typescript

- install typescript
: `npm install --save-dev typescript`

add tsconfig.json at root

Configure Babel
: `npm install --save-dev @babel/preset-typescript`

update babel.config.js

```js
module.exports = {
  presets: [
    ...,
    "@babel/preset-typescript",
  ],
};
```
### Add Jest types

`npm install --save-dev @types/jest`
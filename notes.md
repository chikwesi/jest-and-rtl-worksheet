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
describe('[group name]', () => {})
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

- add tsconfig.json at root

- Configure Babel
  : `npm install --save-dev @babel/preset-typescript`

- update babel.config.js

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

## Using Matchers

Jest `expect` function returns an object of different matching functions that we use to define expectations for testing results.

> A matcher is a function that allows us to check a test result

Matchers can be extended

- jest-extended
- test-library/jest-dom (DOM related matchees)

### Checking for null and undefined

- `expect().tobeNull()` varifies null
- `expect().tobeUndefined()` tests undefined
- `expect().not.[matcher]` property tests opposit of any matcher that follows

---

### Checking for equality

- toStrictEqual: Matches the structure of the object and the properties
```js
expect(result).toStrictEqual({
  id: 1,
  name: 'john',
})
```

- toEqual: Useful to ignore properties whose values are undefined
```js
expect(result).toEqual({
  id: 1,
  name: 'john',
  value: undefined,
})
```
- toMatchObject: Useful to test only certain properties within an object

```js
expect(result).toMatchObject({
  name: 'john'
})
```

### Checking Strings
- `expect().tobe()` to do a strict string comparison.
- `expect().toContain()`
to do a case sensitive partial comparison
- `expect().toMatch()`
to Match a regular expression comparison
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
  name: 'john',
})
```

### Checking Strings

- `expect().tobe()` to do a strict string comparison.
- `expect().toContain()`
  to do a case sensitive partial comparison
- `expect().toMatch()`
  to Match a regular expression comparison

### Checking Arrays

- `expect().toStrictEqual()`
  sparseness is checked

```js
[, 'john'] != [undefined, 'john']
```

- `expect().toEqual()`
  sparseness is not checked

```js
[, 'john'] == [undefined, 'john']
```

- `expect().toConatain`
  To check that a primitive value is contained in an array

- `expect().toContainEqual`
  To Check that a object is contained in a array

### Checking Exceptions

- toThrow()

```js
expect(() => {
  action()
}).toThrow()
```


- `expect().toThrow(Error)`
  To check the exception is of error class

- `expect().toThrow("Not found")`
  To check the exception message matches the string

- `expect().toThrow(/not found/i)`
  To check the

- Asynchronous functions: The promise needs to rejected. Use the `.rejects` property.

```js
expect(async () => {
  await action()
}).rejects.toThrow()
```
### Using Snapshots

`expect().toMatchSnapshot()`

A snapshot defines and stores the result of a test the first time it is executed. On subsequent test execution, if the result is different from the baseline snapshot the tests fails.

>They are useful in testing arrays and objects.



Running jest creates a *__ __snapshots__ __* folder whic contains the snapshot file.

Use the `-u` or `-updateSnapshot` flag to update snapshot

`npm t -- -u`

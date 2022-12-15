# javascript

```javascript
     ██╗ █████╗ ██╗   ██╗ █████╗ ███████╗ ██████╗██████╗ ██╗██████╗ ████████╗
     ██║██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔══██╗██║██╔══██╗╚══██╔══╝
     ██║███████║██║   ██║███████║███████╗██║     ██████╔╝██║██████╔╝   ██║
██   ██║██╔══██║╚██╗ ██╔╝██╔══██║╚════██║██║     ██╔══██╗██║██╔═══╝    ██║
╚█████╔╝██║  ██║ ╚████╔╝ ██║  ██║███████║╚██████╗██║  ██║██║██║        ██║
 ╚════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝
```

## javascript engine

> The engine read and runs the code
>
> _steps_
>

1. read the code
2. parse the code (parse the code into tokens)
3. AST = Abstract Syntax Tree
4. Interpret the code
5. Bytecode = machine code

## Environment

### Docker

- `docker run -v /mnt/code/repos/:/repos --publish 3000:8000 -d -it --rm --user node --name my-nodejs node:16`
- `docker exec -it --user root my-nodejs bash`

## Engine optimization

- `eval()`
- `arguments`
- `for in`
- `with`
- `delete`

- `hidden classes`
- `inline caching`

## stack and heap

> Call stack
>
> Engine keeps track of where code is
>
> Memory heap:
>
> Memory allocation happen
>

## Syntax

### Comments

```javascript
// single line comment
/* multi
line
comment */
```

Comments are ignored by the engine, they are only for humans. Comments are empowering because they facilitate communication with your future self and other developers.

### semi-colon

The semi-colon `;` character is used to delimit parts of a statement. It is not required to delimit statements, but it is highly recommended to use it.

```javascript
// bad
const a = 1
const b = 2

// good
const a = 1;
const b = 2;
```

ASI (Automatic Semicolon Insertion) is a feature of the JavaScript engine that automatically inserts a semi-colon when it detects a line break. This feature is not always reliable and can lead to unexpected results.

### styling the console

```javascript
console.log('%cHello World', 'color: red; font-size: 20px;')
```

adding '%c' to the console.log() method will allow you to style the console output.

### output multiple words

```javascript
console.log('Hello', 'World');
console.log('Hello' + 'World');
```

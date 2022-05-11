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

## Author

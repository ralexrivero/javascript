# JavaScript

## basis

### change HTML content

- `document.getElementById("demo").innerHTML = "Hello JavaScript!";` to change the content of an element

- `getElementsByClassName` returns an array of objects

### Display

- `innerHTML` html content
- `document.write()` for testing purposes in inner `<script>`
- `window.alert()`
- `console.log()` for debugging purposes
- `window.print()` print the current page

### variables

- `var` for old versions previous to 2015, can be accessed outside the block
- `const` the general rule
- `let` if the value can change

> `const` and `let` are block scoped, cannot be accessed outside the `{}` block
>
> `let` can be redeclared in another block
>
> *hoisting*: variables defined with `var` are hoisted to the top
>
> if declared with `let` and `const` are hoisted but not initilized (return an `ReferenceError`)

#### const

- cannot be redeclared
- cannot be reassigned
- have block scope
- must be assigned a value

> `const` does not define a constant value, it defines a constant reference to a value
>
> Cannot reassign a constant value, constant array or constant object
>
> The elements of constant array can be changed
> The properties of constant objects can be changed

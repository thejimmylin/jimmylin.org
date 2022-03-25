---
title: Typescript function annotations
subtitle: The ways of annotating a function are more than one, and it's a little confusing to pick one to use.
createdBy: Jimmy Lin
createdAt: 2021-08-31 22:43
---

# Typescript function annotations

The ways of annotating a function are more than one, and it's a little confusing to pick one to use.

After reading [this](https://dev.to/spukas/typescript-function-annotations-7c4) article, I want to make some conclusion about Typescript annotations.

> TypeScript has a robust inference system, which automatically assigns the best possible data type for values.
> It works very well for variables, objects, arrays and more, so you do not need to think about writing annotations for them.
> But for functions, inference evaluates only a return value and assign best possible type candidate for it.
> That means function arguments are not evaluated, and we need to do it by writing annotations manually.

So, which ways we got to annotate a function?

1. Annotate a function as `function type`:

   ```typescript
   const myFunction: (name: string) => void = (name) => console.log(name);
   ```

2. Annotate a function's arguments and its retured value, like how we annotate other variables:

   ```typescript
   const myFunction = (name: string): void => console.log(name);
   ```

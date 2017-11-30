# TypeScript Basics

In this chapter, we will explore some basics of TypeScript from the [TypeScript Documentation Handbook](https://www.typescriptlang.org/docs/home.html).

This chapter will be evolving with content will be added as we approach them during the Angular tutorial. A deep understanding of TypeScript is not necessary for Angular (which allows the use of JavaScript as well as TypeScript). However, since Angular is written in TypeScript, a good understanding of the syntactical style of TypeScript can be advantageous for larger development projects.



## What is TypeScript?

| REFERENCES                               |
| ---------------------------------------- |
| [1]: https://en.wikipedia.org/wiki/TypeScript "TypeScript" |
| [2]: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#1 "TypeScript Language Specification" |
| [3]: https://johnpapa.net/typescriptpost1/ "TypeScript Fundamentals" |
| [4]: https://basarat.gitbooks.io/typescript/content/ "TypeScript Deep Dive" |



> TypeScript is a free and open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript. TypeScript may be used to develop JavaScript applications for client-side or server-side (Node.js) execution.
>
> [TypeScript, Wikipedia][1]



> TypeScript is a syntactic sugar for JavaScript. TypeScript syntax is a superset of ECMAScript 2015 (ES2015) syntax. Every JavaScript program is also a TypeScript program. The TypeScript compiler performs only file-local transformations on TypeScript programs and does not re-order variables declared in TypeScript. This leads to JavaScript output that closely matches the TypeScript input. TypeScript does not transform variable names, making tractable the direct debugging of emitted JavaScript. TypeScript optionally provides source maps, enabling source-level debugging. TypeScript tools typically emit JavaScript upon file save, preserving the test, edit, refresh cycle commonly used in JavaScript development. 
>
> [TypeScript Language Specification][2]



## Installation

| REFERENCES                               |
| ---------------------------------------- |
| [5] https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html "TypeScript in 5 Minutes" |

There are two main ways to get the TypeScript tools:

* Via npm (the Node.js package manager)
* By installing TypeScript’s Visual Studio plugins





#### npm

###### Node.js command prompt

```bash
> npm install -g typescript
```

###### BASH Shell

```bash
$ npm install -g typescript
```


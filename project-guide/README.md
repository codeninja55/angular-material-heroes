# Angular Material Heroes Introduction

A book following the Tour of Heroes guide from [angular.io](https://angular.io/tutorial) and incorporating [Angular Material](https://material.angular.io/) project. This project and it's accompanying guide is a work in progress and more will be added as I go.

The guide to this project can be found at [GitBook Project Guide](https://codeninja55.gitbooks.io/angular-material-heroes/content/). The code for this project can be found at [GitHub](https://github.com/codeninja55/angular-material-heroes).

![Angular logo](./img/angular_and_material_logos@512px.png)

## What is the goal of this project and guide?

First and foremost, the motivation and goal of this project was for me to learn Angular 2. I am also a huge fan of Google's [Material Design](https://material.io/) philosophy and as a result, wanted to understand how to use Angular Material in my project. I am writing the guide for this project both as a reference for myself and for those who are also on this learning path and stumble upon this. While I am not an experienced web developer, I have developed software in other domains using Python and Linux. It is my hope that this guide can help any new developer along. 



## Who this project is made for?

This project is made for those raw beginners out in Angular and Web Development (like myself). This book will go through all the steps necessary to set up a development environment and follow the Angular guide. Furthermore, this project will include references to extra materials for in-depth research. 



## How to follow progress?

Each chapter of the project guide can be followed by its accompanying branch. Each branch will be named chapter_#. 



## Code convention

Code convention will follow the Markdown syntax. Commands and output that are written for BASH or Command Prompt will include a $ (convention for Linux BASH). 

###### BASH Shell

```bash
$ linux command
output below
```

##### DOS Command Prompt

```bash
> windows command
output below
```

Where necessary, the commands for Windows will be included also. I do apologise if some of the content is incorrect, in particular for MacOS, as I do not own an Apple device to test any configurations and changes. However, most MacOS commands and development environment will be similar to Linux.

Code blocks for files will be as follows:

###### folder/file.ts

```typescript
/** This is a TypeScript comment and file */
function foo() {
  console.log("This is a TypeScript function called foo")
}
```

###### folder/style.css

```css
/* This is a CSS block comment and file */ 
body {
  color: red; // This is a single line comment 
}
```

###### folder/index.html

```html
<!-- This is a HTML comment and file -->
<!DOCTYPE html>
<head>
  <title>Title goes here</title>
</head>
```

By convention, coming from a Python development background, I tend to follow the [PEP Style Guide](https://www.python.org/dev/peps/pep-0008/). However, as Angular 2 has it's own [style guide](https://angular.io/guide/styleguide) written by [John Papa](https://github.com/johnpapa/angular-styleguide), I will try to follow that convention as closely as possible.



## What am I using?

While not necessary for you to follow along, these are some of the tools I will be using throughout this project. Some of these tools come free via the Open-Source movement or have student editions. If you are a student, I highly encourage you take advantage of these and support the developers where you can. 

- Microsoft Surface Pro (2017) with Windows 10 Pro
- Dell XPS 13 9360 _(Not Free)_ with [Linux Mint 18.3 "Sylvia"](https://www.linuxmint.com/edition.php?id=246) - Cinnamon with Linux Kernel 4.11 _(Free)_
- [JetBrains WebStorm 2017.3](https://www.jetbrains.com/webstorm/) _([Student Edition](https://www.jetbrains.com/student/))_
- [Git Version Control](https://git-scm.com/) _(Free)_
- [GitHub](https://github.com) _[(Student Edition with GitHub Student Developer Pack)](https://education.github.com/)_
- [GitBook](gitbook.com/) and [GitBook Editor](https://www.gitbook.com/editor) _(Free)_
- [GitKraken](https://www.gitkraken.com/) _(Free with GitHub Education)_
- [Typora](https://typora.io/) _(Free)_
- [Travis CI](https://travis-ci.org/) _(Free with GitHub Education)_

Please note some of the versions will not be current if you are reading this in the future. It is advisable you __always__ update your applications  and operating systems as they may have important security patches and fixes. If you are having problems with this project in the latest environments, please feel free to contact myself and I will try my best to help. 



## Development Environment

| Windows                                  | Linux                                    |
| ---------------------------------------- | ---------------------------------------- |
| [NodeJS v8.9.1 LTS](https://nodejs.org/en/download/) | [NodeJS v8.9.1 LTS](https://nodejs.org/en/download/) |
| [npm 5.5.1](https://docs.npmjs.com/getting-started/installing-node) | [npm 5.5.1](https://docs.npmjs.com/getting-started/installing-node) |
| [Angular CLI v1.5.4](https://cli.angular.io/) | [Angular CLI v1.5.4](https://cli.angular.io/) |
| NodeJS Command Prompt                    | BASH                                     |



## Feedback

I humbly request and encourage anyone reading this project guide to provide feedback. As a student myself, I welcome any criticism or suggestions from others. You can contact me at the following:

- Twitter &middot; [@codeninja55](https://twitter.com/codeninja55)
- Email &middot; [andrew@codeninja55.me](mailto:andrew@codeninja55.me)
- GitHub &middot; [codeninja55](https://github.com/codeninja55)


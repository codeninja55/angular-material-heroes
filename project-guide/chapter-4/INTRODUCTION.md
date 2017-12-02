# Angular Tour of Heroes

We've almost reached the point where we follow the Angular tutorial. If you have been following along to this point, it may seem for such a simple tutorial there are too many contextual chapters before this point. However, might I counter that a proper understanding of setting up your environment and understanding the TypeScript syntax will allow you to read the tutorial code blocks with a greater appreciation for it's meaning. Programming is not just a matter of read, copy, and retype. In my personal opinion, programming is an exploratory endeavor both to find the limits of technology and to grasp the meaning of other developer's code. But before we begin our proper tour of Angular, there is yet a few more important considerations we must delve into - what is Angular and Angular Architecture. 

## What is Angular?

| REFERENCES                               |
| ---------------------------------------- |
| [1]: https://angular.io/docs "What is Angular?" |
| [2]: https://embed.plnkr.co/?show=preview&show=app%2Fapp.component.ts "Get a glimpse of Angular" |
| [3]: https://angular-2-training-book.rangle.io/handout/why_angular_2.html "Why Angular?" |

> Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop
>
> [What is Angular?][1]

## Why Angular?

> #### Angular 2 is Easier
>
> The new Angular codebase is more modern, more capable and easier for new programmers to learn than Angular 1.x, while also being easier for project veterans to work with.
>
> With Angular 1, programmers had to understand the differences between Controllers, Services, Factories, Providers and other concepts that could be confusing, especially for new programmers.
>
> Angular 2 is a more streamlined framework that allows programmers to focus on simply building JavaScript classes. Views and controllers are replaced with components, which can be described as a refined version of directives. Even experienced Angular programmers are not always aware of all the capabilities of Angular 1.x directives. Angular 2 components are considerably easier to read, and their API features less jargon than Angular 1.x's directives. Additionally, to help ease the transition to Angular 2, the Angular team has added a `.component` method to Angular 1.5, which has been [back-ported by community member Todd Motto to v1.3](https://toddmotto.com/angular-component-method-back-ported-to-1.3/).
>
> #### TypeScript
>
> Angular 2 was written in TypeScript, a superset of JavaScript that implements many new ES2016+ features.
>
> By focusing on making the framework easier for computers to process, Angular 2 allows for a much richer development ecosystem. Programmers using sophisticated text editors (or IDEs) will notice dramatic improvements with auto-completion and type suggestions. These improvements help to reduce the cognitive burden of learning Angular 2. Fortunately for traditional ES5 JavaScript programmers this does *not* mean that development must be done in TypeScript or ES2015: programmers can still write vanilla JavaScript that runs without transpilation.
>
> #### Familiarity
>
> Despite being a complete rewrite, Angular 2 has retained many of its core concepts and conventions with Angular 1.x, e.g. a streamlined, "native JS" implementation of dependency injection. This means that programmers who are already proficient with Angular will have an easier time migrating to Angular 2 than another library like React or framework like Ember.
>
> #### Performance and Mobile
>
> Angular 2 was designed for mobile from the ground up. Aside from limited processing power, mobile devices have other features and limitations that separate them from traditional computers. Touch interfaces, limited screen real estate and mobile hardware have all been considered in Angular 2.
>
> Desktop computers will also see dramatic improvements in performance and responsiveness.
>
> Angular 2, like React and other modern frameworks, can leverage performance gains by rendering HTML on the server or even in a web worker. Depending on application/site design this isomorphic rendering can make a user's experience *feel* even more instantaneous.
>
> The quest for performance does not end with pre-rendering. Angular 2 makes itself portable to native mobile by integrating with [NativeScript](https://www.nativescript.org/), an open source library that bridges JavaScript and mobile. Additionally, the Ionic team is working on an Angular 2 version of their product, providing *another* way to leverage native device features with Angular.
>
> #### Project Architecture and Maintenance
>
> The first iteration of Angular provided web programmers with a highly flexible framework for developing applications. This was a dramatic shift for many web programmers, and while that framework was helpful, it became evident that it was often too flexible. Over time, best practices evolved, and a community-driven structure was endorsed.
>
> 
>
> Angular 1.x tried to work around various browser limitations related to JavaScript. This was done by introducing a module system that made use of dependency injection. This system was novel, but unfortunately had issues with tooling, notably minification and static analysis.
>
> Angular 2.x makes use of the ES2015 module system, and modern packaging tools like webpack or SystemJS. Modules are far less coupled to the "Angular way", and it's easier to write more generic JavaScript and plug it into Angular. The removal of minification workarounds and the addition of rigid prescriptions make maintaining existing applications simpler. The new module system also makes it easier to develop effective tooling that can reason better about larger projects.
>
> [Why Angular?][3]


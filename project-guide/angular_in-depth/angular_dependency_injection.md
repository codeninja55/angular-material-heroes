# Angular Dependency Injection

| REFERENCE                                |
| ---------------------------------------- |
| [1]: https://angular.io/guide/dependency-injection "Angular Dependency Injection" |

---

**Dependency Injection (DI)** is a way to create objects that depend upon other objects. A Dependency Injection system supplies the dependent objects (called the *dependencies*) when it creates an instance of an object.

The [Dependency Injection pattern](https://angular.io/guide/dependency-injection-pattern) page describes this general approach. *The guide you're reading now* explains how Angular's own Dependency Injection system works.

## DI by example

You'll learn Angular Dependency Injection through a discussion of the sample app that accompanies this guide. Run the [live example](https://angular.io/generated/live-examples/dependency-injection/eplnkr.html) / [download example](https://angular.io/generated/zips/dependency-injection/dependency-injection.zip) anytime.

Start by reviewing this simplified version of the *heroes* feature from the [The Tour of Heroes](https://angular.io/tutorial/).

###### src/app/heroes/heroes.component.ts

```typescript
import { Component } from '@angular/core';
@Component({
  selector: 'app-heroes',
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `
})

export class HeroesComponent { }
```

###### src/app/heroes/heroes-list.component.ts

```typescript
import { Component }   from '@angular/core';
import { HEROES }      from './mock-heroes';

@Component({
  selector: 'app-hero-list',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `
})

export class HeroListComponent {
  heroes = HEROES;
}
```

###### src/app/heroes/heroes.ts

```typescript
export class Hero {
  id: number;
  name: string;
  isSecret = false;
}
```

###### src/app/heroes/mock-heroes.ts

```typescript
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 11, isSecret: false, name: 'Mr. Nice' },
  { id: 12, isSecret: false, name: 'Narco' },
  { id: 13, isSecret: false, name: 'Bombasto' },
  { id: 14, isSecret: false, name: 'Celeritas' },
  { id: 15, isSecret: false, name: 'Magneta' },
  { id: 16, isSecret: false, name: 'RubberMan' },
  { id: 17, isSecret: false, name: 'Dynama' },
  { id: 18, isSecret: true,  name: 'Dr IQ' },
  { id: 19, isSecret: true,  name: 'Magma' },
  { id: 20, isSecret: true,  name: 'Tornado' }
];
```

The `HeroesComponent` is the top-level heroes component. It's only purpose is to display the `HeroListComponent` which displays a list of hero names.

This version of the `HeroListComponent` gets its `heroes` from the `HEROES` array, an in-memory collection defined in a separate `mock-heroes` file.

###### src/app/heroes/heroes-list.component.ts

```typescript
export class HeroListComponent {
  heroes = HEROES;
}
```

That may suffice in the early stages of development, but it's far from ideal. As soon as you try to test this component or get heroes from a remote server, you'll have to change the implementation of `HerosListComponent` and replace every other use of the `HEROES` mock data.

It's better to hide these details inside a *service* class, [defined in its own file](https://angular.io/guide/dependency-injection#one-class-per-file).

---

### Create an injectable *HeroService*

The [**Angular CLI**](https://cli.angular.io/) can generate a new `HeroService` class in the `src/app/heroes` folder with this command.

```bash
$ ng generate service heroes/hero
```

That command creates the following `HeroService` skeleton.

###### src/app/heroes/hero.service.ts (DEFAULT)

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  constructor() { }
}
```

Assume for now that the [`@Injectable` decorator](https://angular.io/guide/dependency-injection#injectable) is an essential ingredient in every Angular service definition. The rest of the class has been rewritten to expose a `getHeroes` method that returns the same mock data as before.

###### src/app/heroes/hero.service.ts

```typescript
import { Injectable } from '@angular/core';
import { HEROES }     from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() { return HEROES; }
}
```

Of course, this isn't a real data service. If the app were actually getting data from a remote server, the `getHeroes` method signature would have to be asynchronous.

That's a defect we can safely ignore in this guide where our focus is on *injecting the service* into the `HeroList` component.

### Register a service provider

A *service* is just a class in Angular until you register it with an Angular dependency injector.

An Angular injector is responsible for creating service instances and injecting them into classes like the `HeroListComponent`.

You rarely create an Angular injector yourself. Angular creates injectors for you as it executes the app, starting with the *root injector* that it creates during the [bootstrap process](https://angular.io/guide/bootstrapping).

You do have to register *providers* with an injector before the injector can create that service.

**Providers** tell the injector *how to create the service*. Without a provider, the injector would not know that it is responsible for injecting the service nor be able to create the service.

> You'll learn much more about *providers* below. For now it is sufficient to know that they create services and must be registered with an injector. 

You can register a provider with any Angular decorator that supports the **providers array property**.

Many Angular decorators accept metadata with a `providers` property. The two most important examples are `@Component` and `@NgModule`.

#### *@Component* providers

Here's a revised `HeroesComponent` that registers the `HeroService` in its `providers` array.

###### src/app/heroes/heroes.component.ts

```typescript
import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  providers: [ HeroService ],
  template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `
})

export class HeroesComponent { }
```

#### *@NgModule* providers

In the following excerpt, the root `AppModule` registers two providers in its `providers` array.

###### src/app/app.module.ts

```typescript
providers: [
  UserService,
  { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
],
```

The first entry registers the `UserService` class (*not shown*) under the `UserService` *injection token*. The second registers a value (`HERO_DI_CONFIG`) under the `APP_CONFIG` *injection token*.

Thanks to these registrations, Angular can inject the `UserService` or the `HERO_DI_CONFIG` value into any class that it creates.

> You'll learn about *injection tokens* and *provider* syntax below.

#### *@NgModule* or *@Component*?

Should you register a service with an Angular module or with a component? The two choices lead to differences in service *scope* and service *lifetime*.

**Angular module providers** (`@NgModule.providers`) are registered with the application's root injector. Angular can inject the corresponding services in any class it creates. Once created, a service instance lives for the life of the app and Angular injects this one service instance in every class that needs it.

You're likely to inject the `UserService` in many places throughout the app and will want to inject the same service instance every time. Providing the `UserService` with an Angular module is a good choice.

> To be precise, Angular module providers are registered with the root injector *unless the module is* [lazy loaded](https://angular.io/guide/ngmodule#lazy-load-DI). In this sample, all modules are *eagerly loaded* when the application starts, so all module providers are registered with the app's root injector.

**A component's providers** (`@Component.providers`) are registered with each component instance's own injector.

Angular can only inject the corresponding services in that component instance or one of its descendant component instances. Angular cannot inject the same service instance anywhere else.

Note that a component-provided service may have a limited lifetime. Each new instance of the component gets its own instance of the service and, when the component instance is destroyed, so is that service instance.

In this sample app, the `HeroComponent` is created when the application starts and is never destroyed so the `HeroService` created for the `HeroComponent` also live for the life of the app.

If you want to restrict `HeroService` access to the `HeroComponent` and its nested `HeroListComponent`, providing the `HeroService` in the `HeroComponent` may be a good choice.

> The scope and lifetime of component-provided services is a consequence of [the way Angular creates component instances](https://angular.io/guide/dependency-injection#component-child-injectors).

### Inject a service

The `HeroListComponent` should get heroes from the `HeroService`.

The component shouldn't create the `HeroService` with `new`. It should ask for the `HeroService` to be injected.

You can tell Angular to inject a dependency in the component's constructor by specifying a **constructor parameter with the dependency type**. Here's the `HeroListComponent` constructor, asking for the `HeroService` to be injected.

###### src/app/heroes/hero-list.component.ts (constructor signature)

```typescript
constructor(heroService: HeroService)
```

Of course, the `HeroListComponent` should do something with the injected `HeroService`. Here's the revised component, making use of the injected service, side-by-side with the previous version for comparison.

###### src/app/heroes/heroes-list.component.ts (with DI)

```typescript
import { Component }   from '@angular/core';
import { Hero }        from './hero';
import { HeroService } from './hero.service';
 
@Component({
  selector: 'app-hero-list',
  template: `
    <div *ngFor="let hero of heroes">
      {{hero.id}} - {{hero.name}}
    </div>
  `
})

export class HeroListComponent {
  heroes: Hero[];
 
  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}
```

Notice that the `HeroListComponent` doesn't know where the `HeroService` comes from. *You* know that it comes from the parent `HeroesComponent`. But if you decided instead to provide the `HeroService` in the `AppModule`, the `HeroListComponent` wouldn't change at all. The *only thing that matters* is that the `HeroService` is provided in some parent injector.

#### Singleton services

Services are singletons *within the scope of an injector*. There is at most one instance of a service in a given injector.

There is only one root injector and the `UserService` is registered with that injector. Therefore, there can be just one `UserService` instance in the entire app and every class that injects `UserService` get this service instance.

However, Angular DI is a [hierarchical injection system](https://angular.io/guide/hierarchical-dependency-injection), which means that nested injectors can create their own service instances. Angular creates nested injectors all the time.

#### Component child injectors

For example, when Angular creates a new instance of a component that has `@Component.providers`, it also creates a new *child injector* for that instance.

Component injectors are independent of each other and each of them creates its own instances of the component-provided services.

When Angular destroys one of these component instance, it also destroys the component's injector and that injector's service instances.

Thanks to [injector inheritance](https://angular.io/guide/hierarchical-dependency-injection), you can still inject application-wide services into these components. A component's injector is a child of its parent component's injector, and a descendent of its parent's parent's injector, and so on all the way back to the application's *root* injector. Angular can inject a service provided by any injector in that lineage.

For example, Angular could inject a `HeroListComponent` with both the `HeroService` provided in `HeroComponent` and the `UserService` provided in `AppModule`.

#### Testing the component

Earlier you saw that designing a class for dependency injection makes the class easier to test. Listing dependencies as constructor parameters may be all you need to test application parts effectively.

For example, you can create a new `HeroListComponent` with a mock service that you can manipulate under test:

###### src/app/test.component.ts

```typescript
const expectedHeroes = [{name: 'A'}, {name: 'B'}]
const mockService = <HeroService> {getHeroes: () => expectedHeroes }

it('should have heroes when HeroListComponent created', () => {
  // Pass the mock to the constructor as the Angular injector would
  const component = new HeroListComponent(mockService);
  expect(component.heroes.length).toEqual(expectedHeroes.length);
});
```

#### When the service needs a service

The `HeroService` is very simple. It doesn't have any dependencies of its own.

What if it had a dependency? What if it reported its activities through a logging service? You'd apply the same *constructor injection* pattern, adding a constructor that takes a `Logger` parameter.

Here is the revised `HeroService` that injects the `Logger`, side-by-side with the previous service for comparison.
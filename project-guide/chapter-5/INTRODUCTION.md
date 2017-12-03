# Tutorial: Tour of Marvel Heroes with Angular Material

| REFERENCES                               |
| ---------------------------------------- |
| [1]: https://angular.io/tutorial "Tutorial: Tour of Heroes" |

------

The *Tour of Heroes* tutorial covers the fundamentals of Angular.

In this tutorial you will build an app that helps a staffing agency manage its stable of heroes.

This basic app has many of the features you'd expect to find in a data-driven application. It acquires and displays a list of heroes, edits a selected hero's detail, and navigates among different views of heroic data.

By the end of the tutorial you will be able to do the following:

- Use built-in Angular directives to show and hide elements and display lists of hero data.
- Create Angular components to display hero details and show an array of heroes.
- Use one-way data binding for read-only data.
- Add editable fields to update a model with two-way data binding.
- Bind component methods to user events, like keystrokes and clicks.
- Enable users to select a hero from a master list and edit that hero in the details view.
- Format data with pipes.
- Create a shared service to assemble the heroes.
- Use routing to navigate among different views and their components.

You'll learn enough Angular to get started and gain confidence that Angular can do whatever you need it to do.

After completing all tutorial steps, the final app will look like this [live example](https://angular.io/generated/live-examples/toh-pt6/eplnkr.html) / [download example](https://angular.io/generated/zips/toh-pt6/toh-pt6.zip).

## What you'll buid

Here's a visual idea of where this tutorial leads, beginning with the "Dashboard" view and the most heroic heroes:



*// Image to be added after completion*



You can click the two links above the dashboard ("Dashboard" and "Heroes") to navigate between this Dashboard view and a Heroes view.

If you click the dashboard hero "Magneta," the router opens a "Hero Details" view where you can change the hero's name.



*// Image to be added after completion*



Clicking the "Back" button returns you to the Dashboard. Links at the top take you to either of the main views. If you click "Heroes," the app displays the "Heroes" master list view.



*// Image to be added after completion*



When you click a different hero name, the read-only mini detail beneath the list reflects the new choice.

You can click the "View Details" button to drill into the editable details of the selected hero.

The following diagram captures all of the navigation options.



*// Image to be added after completion*




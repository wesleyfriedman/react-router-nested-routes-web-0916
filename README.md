# Nested Routes in React Router

## Objectives

1. Describe React Router allows nesting routes
2. Describe the benefits of rendering a route as a tree of components
3. Explain how to set up a redirect with React Router3
4. Explain how to access parameters in React Router
5. Explain how to organize routes in a standard React + React Router application
6. Describe how to set up a default component for a given path"


## Overview

In the previous lesson, we briefly looked at setting up nested routes. We created a main component, `App`, which rendered a `NavBar` component and then any *child components*. In this lesson, we'll take this concept a step further and look at how we might set up other components as "nested routes" of their parents.

## Master Detail Without Routes

Have you ever used Apple's Messages app for your Mac? How about GMail? What about YouTube? All of those apps use some version of a "Master-Detail" interface. You'll have a list of items on portion of the screen, such as messages, videos, or emails, and some more detailed display of that item on another portion of the screen. Clicking on a new item in the list changes which item we have selected.

We can implement a version of this without React-Router, but it's a bit of a pain - we have to manually change the selected item and pass it down into a different component. Also, when the selected item changes, it's not actually reflected in the URL. This is a big bummer - it means that there's no way to me to send a link directly to one item to someone else.

## Nesting

By using React-Router, we can make our components children of each other. Take YouTube for example. Let's pretend that visiting `/videos` displays a list of videos. Clicking on any video keeps our list of videos on the page, but also displays details on the selected video. This should be updated by the URL - the URL should have changed to `/videos/:id`. The VideoDetail in this case is a 'Nested Component' of '/videos' - it will always have the list rendered before it.

## Code Along

### Rending Our List

Start out with a `MoviePage` component that connects to the store and renders out a `MovieList`. The movie list is presentation and just renders out. Explain that we're using Bootstrap columns for sizing but we could do this ourselves if we wanted to.

### Linking to the Show

Create the nested routes at `/movies/:id` Have it display at that URL without actually being dynamic - just make it say `Movie Show Component`. Import the `Link` component into our Movie List to link to that component.


### Dynamically finding the show

Here, we'll use `mapStateToProps` and `ownProps` on our movie component to find the selected movie.

### Adding the New Option

Now, we'll create the route for the `new` component. Make this one display the new form.
Submitting the form should create the new movie and direct back to the movies index using browser history. 

## Resources

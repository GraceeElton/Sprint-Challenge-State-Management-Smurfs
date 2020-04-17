1.  What problem does the context API help solve?

        less code. Feels easier

1.  In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

        actions - performs an action to use later on state
        reducer - is where you are implementing the actions for the state.
        store - not sure actually. But I know it goes in Index.js!
        There is only 1 place where state is held and controlled

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

            compnotent state is useed for big compontent trees
            application state is used for 1 componetnent such as a form

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    is a middleware that lets you call action creators that return a function instead of an action object.
    so you have more controll of when your action get called

1) What is your favorite state management system you've learned and this sprint? Please explain why!
   I think I have a better understanding of redux and how to use it on my own.

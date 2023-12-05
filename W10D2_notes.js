/*

Middleware!

All middleware must take in at least 3 params
    request (req), response (res), next

next() must be invoked to move on to the next piece of middleware

If we try to send multiple responses from a single request, we will get an error

app.use is explicitely for middleware
    The path string is not needed, but can be useful
    The path string does not have to match exactly. The beginning of the path must match the prefix.
    !! The prefix is ignored in the path that is passed to the middleware !!

Another method of control is passing something into next()

When anything is passed into next, Express behavior changes a lot
    Express will skip all other middleware until it finds one that takes in a 4th parameter (error)
        Important to note that the order of the params matter (err, req, res, next)
    To handle the error being passed, we have to create a way to catch that error
    Express assumes that route handler isn't meant to take in an error

Error Handling Middleware
    Takes in a 4th arg (err)
    Generally at the end of the pipeline so that nothing is skipped and it can catch all the errors

    Anytime we generate a new error, we need to add a statusCode property to that new Error

    Why should we go through all of this work by setting up error handling middleware instead of just handling the errors in the routes?
        SRP/DRY
        Readability

Routers
    An extension of our app object
    In our route file:
        Import express
        Create router object

    Router objects behave like the app object in many ways, but not all

    We must attach our router to our app
        First we must export the router
        Then we import the router into our app.js
        Finally, we have to tell Express to use that router



*/
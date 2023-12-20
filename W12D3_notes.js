/*

Scopes
    Ensures we are retrieving data from our DB that we intend to 
    Dries up our code

    Couple ways to add scope:
    In last object in init:
        Default scope to our model
            defaultScope: {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
        Scopes property
            Point to an object
            That object has KV pairs with the key being the name of the scope, and the value being the object to be passed to the query
            When applying a non-default scope, we have to adjust the query
                We have to add .scope() to the query
                <model>.scope(<scopes>).<query method>()
            If we add a named scope to the query, the defaultScope will NOT be applied automatically
            If you have conflicting scopes, whichever comes last will overwrite the others.
        We can also add a function scope
            Function scopes return a filter to be applied to the query
            Function scopes get passed in as another object with a key of method and a value of an array:
                {method: [<scope name>, <args>]}





*/
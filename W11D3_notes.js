/*

CRUD in Sequelize

There are a variety of query methods built into our models
    findAll
        Useful when we want to return multiple records
        Always returns an array
    findOne
        Useful when we want to find just a single record
        If column we are filtering by is not UNIQUE, Sequelize will add LIMIT 1
    findByPk
        Also useful when finding a single record
        Basically a findOne, but shortcuts to searching via Primary Key

    To use these methods, we have to follow a couple steps:
        1. Import the model into the router
        2. Dispatch the method on the model, setting the return to a variable
            Make sure we await the fetch

    Remember that all of the queries we write, get turned into SQL

    By default, Sequelize will do SELECT *
    If we want to select certain columns, we need to add something to our query
        All of our queries can take in an object
        We can add the attributes property to select certain columns
            This property takes in an array of the cols we want

    To add a WHERE clause, we add a "where" property to the query that takes in an nested object has a key of the column and value of what you are looking for

    If we want to add ORDER BY, that also goes in the query obj
        order: [[<col>, <'ASC' || 'DESC'>]]
        Note that the arg for order is a 2D array

    If we want to use LIKE in our query:
        We can use the Op object from Sequelize

    





*/
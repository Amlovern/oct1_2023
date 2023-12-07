/*

Database Relationships

What are the 3 types of Relationships?
    One to One
    One to Many
    Many to Many
        Note that a Join table can have more than just the 2 foreign keys

When setting up a foreign key (FK) column, the FK goes on the many side of a One to Many relationship

There are a couple ways to establish a FK in a CREATE TABLE command
    1. At the bottom of the CREATE, we can add:
        FOREIGN KEY (<col name>) REFERENCES <other table>(id)
    2. We can combine that on the column info:
        <col name> INTEGER REFERENCES <other table>(id)

What about (chain) deleting?
    ON DELETE CASCADE
    ON DELETE SET NULL





                surprise uwu
                uwus in the chat 👉👈
*/
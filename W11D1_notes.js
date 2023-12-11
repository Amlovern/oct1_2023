/*

Efficiency with SQL

What makes SQL inefficient?
    Large data sets
        SQL is going to check every single line
    Connections to the DB

What can we do to improve efficiency?
    Indexes
    Use joins and subqueries
        This reduced the number of connections to DB
    SELECT  only the data we need
    Benchmarking

What is the time complexity of a query without an index? And with an index?
    Without: O(n) where n = the number of records
    With: O(log n) where n = the number of records
        Indexing sorts the col, allowing us to use a binary search

What is the syntax for creating an Index?
    CREATE INDEX <index name> ON <table name> (<list of cols>)
    Can also create a UNIQUE Index
What is the naming convention for indexes? i.e. table users, cols: first_name, last_name
    idx_<table name>_<col names>
    idx_users_first_name_last_name
An index on two columns will be applied to a search if at least the first column is used in the query's WHERE clause
If searching only by the second indexed column, the index won't be used

Every time we create an index, all of our other operations (CUD) become more expensive

Before we start throwing indexes into our table, we need to have a base of how long this query takes

How do we start a benchmark?
    .timer on

The first time we run a query is the most expensive
    This is due to how sqlite does caching under the hood

How do we check if a query is already using an index?
    EXPLAIN QUERY PLAN
    <the query code>

What is the difference between SCAN and SEARCH responses from EXPLAIN QUERY PLAN?
    SCAN - checking all records
    SEARCH - binary searching an index

What steps do we take to benchmark a query?
    1. Turn .timer on
    2. Run query to get initial time
    3. EXPLAIN QUERY PLAN to identify if an index is being used
    4. If no index, add an index
    5. EXPLAIN QUERY PLAN again to confirm that the index is being used
    6. Run query again to get new time

Every time we add a UNIQUE constraint to a column, we are adding an index
    This allows SQL to quickly identify if the UNIQUE constraint passes or fails



*/
/*

Search Features and Pagination

A couple things to think about when setting up pagination
    Should take in page and size query strings to determine pagination
    When writing our queries, we use a couple properties for pagination
        limit: size
        offset: size * (page - 1)

How do we handle edge cases?
    If page or size are undefined, they should be set to defaults of 1 and 3 respectively
    If page or size < 1, add no pagination and return all results
        This can be done by writing a completely separate query inside a conditional
            This is highly repetitive
        Instead, we can create a pagination object and set the limit and offset properties inside that object
            Then we can spread the pagination object into our query object









*/
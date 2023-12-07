-- 1
SELECT * FROM albums
WHERE num_sold >= 100000;

-- 2
SELECT * 
FROM albums 
WHERE year BETWEEN 2018 AND 2020;

-- 3
SELECT * FROM albums
WHERE band_id IN (1, 3, 4);

-- 4
SELECT * FROM albums 
WHERE title LIKE "The%";

-- 5
SELECT * FROM albums
ORDER BY num_sold DESC
LIMIT 2;

-- 6
SELECT * FROM albums
ORDER BY num_sold DESC
LIMIT 2
OFFSET 2;
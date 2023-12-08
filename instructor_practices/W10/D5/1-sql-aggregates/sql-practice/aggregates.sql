-- 1
SELECT COUNT(*) FROM cats;

-- 2
SELECT MIN(birth_year), name, birth_year
FROM cats;

SELECT MAX(birth_year), name, birth_year
FROM cats;

-- 3
SELECT COUNT(*), cats.name FROM toys
JOIN cats ON (toys.cat_id = cats.id)
GROUP BY cats.name;

-- 4
SELECT COUNT(*), cats.name FROM toys
JOIN cats ON (toys.cat_id = cats.id)
GROUP BY cats.name
HAVING COUNT(*) >= 2;
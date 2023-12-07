SELECT name, release_year, genre FROM games
WHERE metacritic_score >= 7.0
AND release_year > 2005;


SELECT name, release_year, genre FROM games
WHERE release_year > 2000
AND NOT esrb_rating = 'E';

DELETE FROM games
WHERE metacritic_score < 7.0;

UPDATE games SET online = 1
WHERE online = 0;

SELECT * FROM games
WHERE release_year BETWEEN 2000 AND 2009;

SELECT name, metacritic_score, release_year
FROM games
WHERE esrb_rating IN ('T', 'M');

SELECT name, metacritic_score, release_year
FROM games
WHERE name LIKE '%b%';

SELECT name, metacritic_score
FROM games
ORDER BY metacritic_score DESC, name;

SELECT name, metacritic_score, release_year
FROM games
ORDER BY sold_units DESC
LIMIT 1
OFFSET 1;

SELECT name, metacritic_score / 2 AS score_out_of_5
FROM games;
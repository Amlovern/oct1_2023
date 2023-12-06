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
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

SELECT games.name AS 'game', metacritic_score, release_year, genres.name AS 'genre'
FROM games
JOIN genres ON (genres.id = games.genre_id);


SELECT games.name AS 'game', metacritic_score, release_year, studios.name AS 'studio', genres.name AS 'genre'
FROM games
JOIN genres ON (genres.id = games.genre_id)
JOIN studio_games ON (studio_games.game_id = games.id)
JOIN studios ON (studios.id = studio_games.studio_id);


SELECT games.name AS 'game', metacritic_score, release_year, studios.name AS 'studio', genres.name AS 'genre'
FROM studios
JOIN studio_games ON (studio_games.studio_id = studios.id)
JOIN games ON (games.id = studio_games.game_id)
JOIN genres ON (genres.id = games.genre_id);


-- Find the name, calling it chicken_wing, of the game with the highest metacritic score and the studio that developed it. If there are multiple games with the same highest score, return all of them along with their respective studios except studios that weren't established before 2002.

SELECT games.name AS 'chicken_wing', studios.name AS 'french_fries'
FROM games
JOIN studio_games ON (studio_games.game_id = games.id)
JOIN studios ON (studios.id = studio_games.studio_id)
WHERE studios.year_established >= 2002
ORDER BY metacritic_score DESC
LIMIT 1;

SELECT DISTINCT esrb_rating FROM games;
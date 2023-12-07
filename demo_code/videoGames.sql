-- Table games {
--   id INTEGER
--   name VARCHAR
--   release_year INTEGER
--   esrb_rating VARCHAR(5)
--   studio VARCHAR(50)
--   sales INTEGER
--   description TEXT
--   genre VARCHAR(20)
--   online BOOLEAN
--   metacritic_score DECIMAL(2,1)
-- }

CREATE TABLE games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR UNIQUE NOT NULL,
    release_year INTEGER,
    esrb_rating VARCHAR(5),
    studio VARCHAR(50) NOT NULL,
    sold_units INTEGER,
    description TEXT,
    genre_id INTEGER REFERENCES genres(id),
    online BOOLEAN,
    metacritic_score DECIMAL(2,1)
    -- FOREIGN KEY (genre_id) REFERENCES genres(id)
);

INSERT INTO games (name, release_year, esrb_rating, studio, sold_units, description, genre, online, metacritic_score)
VALUES
('Tetris', 1984, 'E', 'Mirrorsoft', 520000000, 'Drop shapes, make lines, rage', 'Puzzle', false, 7.8),
('PUBG: Battlegrounds', 2017, 'T', 'KRAFTON', 75000000, 'PUBG is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.', 'Battle Royale', true, 4.8),
('League of Legends', 2009, 'T', 'Riot Games', 0, 'League of Legends is one of the world''s most popular video games, developed by Riot Games. It features a team-based competitive game mode based on strategy and outplaying opponents. Players work with their team to break the enemy Nexus before the enemy team breaks theirs.', 'MOBA', true, 4.9),
('Super Smash Bros. Melee', 2001, 'T', 'Nintendo', 7000000, 'It is the second game in the series, following Super Smash Bros. Like its predecessor, Melee features gameplay unique in comparison to that of other fighting games. Characters have simple movesets that lack complicated button inputs and lengthy inescapable combos, instead emphasizing movement and ringouts.', 'Fighting', true, 9.0),
('Pokemon Emerald', 2004, 'E', 'Game Freak', 7000000, 'Pokémon Emerald Version takes Trainers back to the land of Hoenn for an expanded adventure, this time against both Team Magma and Team Aqua! Pokémon Emerald also features an even more exciting storyline featuring the Legendary Rayquaza, and the chance to catch more Legendary Pokémon such as both Latios and Latias!', 'RPG', true, 8.8);
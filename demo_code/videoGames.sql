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
    sales INTEGER,
    description TEXT,
    genre VARCHAR(20),
    online BOOLEAN,
    metacritic_score DECIMAL(2,1)
);
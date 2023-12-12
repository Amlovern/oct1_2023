DROP TABLE IF EXISTS unique_users;

CREATE TABLE unique_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR UNIQUE,
    last_name VARCHAR
);

CREATE UNIQUE INDEX idx_unique_unique_users_fn_ln ON unique_users(first_name, last_name);


INSERT INTO unique_users (first_name, last_name)
VALUES
('Brandon', 'Laursen'),
('Maica', 'Santos'),
('Trevor', 'Moore'),
('Charles', 'Woods'),
('Shane', 'Wilkey'),
('Briana', 'Robinson'),
('Charlie', 'Sheppard'),
('Gary', 'Song'),
('Geoffrey', 'Otieno'),
('Tanner', 'Shaw'),
('Daniel', 'Chin'),
('Anthony', 'Lovern'),
('Jojo', 'Yih'),
('Franco', 'Portin'),
('Dan', 'Purcell'),
('Keegan', 'Abley'),
('Jefferson', 'Garcia'),
('Brad', 'Simpson'),
('David', 'Nash'),
('Andrew', 'Tran'),
('Hector', 'Crespo'),
('Brian', 'Kiesel');

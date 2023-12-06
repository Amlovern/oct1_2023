-- 1
UPDATE friends
SET first_name = 'Ryder'
WHERE id = 1;

UPDATE friends 
SET first_name = 'Ryder' 
WHERE first_name = 'Ryan';

UPDATE friends 
SET first_name = 'Ryder'
WHERE first_name = 'Ryan' 
AND last_name = 'Pond';

UPDATE friends
SET first_name = ''
WHERE id = 5;

UPDATE friends
SET first_name = 'Anthony', last_name = 'Lovern'
WHERE id = 1;
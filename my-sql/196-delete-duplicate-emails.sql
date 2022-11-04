-- Table: Person
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | email       | varchar |
-- +-------------+---------+
-- id is the primary key column for this table.
-- Each row of this table contains an email. The emails will not contain uppercase letters.
DELETE p1
FROM
    Person p1,
    Person p2
WHERE
    p1.id > p2.id
    AND p1.email = p2.email;
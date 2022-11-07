-- Table: Users
-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | user_id        | int     |
-- | name           | varchar |
-- +----------------+---------+
-- user_id is the primary key for this table.
-- This table contains the ID and the name of the user. The name consists of only lowercase and uppercase characters.
-- Write an SQL query to fix the names so that only the first character is uppercase and the rest are lowercase.
-- V1
SELECT
    u.user_id AS user_id,
    CONCAT(
        UPPER(LEFT(u.name, 1)),
        LOWER(SUBSTRING(u.name, 2))
    ) AS name
FROM
    Users u
ORDER BY
    u.user_id;

-- V2
SELECT
    user_id,
    CONCAT(
        UPPER(SUBSTR(Users.name, 1, 1)),
        LOWER(SUBSTR(Users.name, 2))
    ) AS name
FROM
    Users
ORDER BY
    user_id;
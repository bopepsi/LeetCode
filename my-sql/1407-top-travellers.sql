-- Table: Users
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | name          | varchar |
-- +---------------+---------+
-- id is the primary key for this table.
-- name is the name of the user.
-- Table: Rides
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | user_id       | int     |
-- | distance      | int     |
-- +---------------+---------+
-- id is the primary key for this table.
-- user_id is the id of the user who traveled the distance "distance".
-- Write an SQL query to report the distance traveled by each user.
-- V1
SELECT
    u.name AS name,
    (IF(SUM(r.distance) IS NULL, 0, SUM(r.distance))) AS "travelled_distance"
FROM
    Users u
    LEFT JOIN Rides r ON u.id = r.user_id
GROUP BY
    u.id
ORDER BY
    travelled_distance DESC,
    u.name ASC;

-- V2
SELECT
    u.name AS name,
    IFNULL(SUM(r.distance), 0) AS "travelled_distance"
FROM
    Users u
    LEFT JOIN Rides r ON u.id = r.user_id
GROUP BY
    u.id
ORDER BY
    travelled_distance DESC,
    u.name ASC;
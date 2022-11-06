-- Table: ActorDirector
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | actor_id    | int     |
-- | director_id | int     |
-- | timestamp   | int     |
-- +-------------+---------+
-- timestamp is the primary key column for this table.
-- Write a SQL query for a report that provides the pairs (actor_id, director_id) where the actor has cooperated with the director at least three times.
-- V1
SELECT
    t.actor_id,
    t.director_id
FROM
    ActorDirector t,
GROUP BY
    t.actor_id,
    t.director_id
HAVING
    COUNT(t.timestamp) >= 3;

-- V2
SELECT
    DISTINCT t.actor_id,
    t.director_id
FROM
    ActorDirector t
WHERE
    (
        SELECT
            COUNT(*)
        FROM
            ActorDirector t2
        WHERE
            t2.director_id = t.director_id
            AND t2.actor_id = t.actor_id
    ) >= 3;
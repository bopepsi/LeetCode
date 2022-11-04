-- Table: Weather
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | recordDate    | date    |
-- | temperature   | int     |
-- +---------------+---------+
-- id is the primary key for this table.
-- This table contains information about the temperature on a certain day.
-- Write an SQL query to find all dates' Id with higher temperatures compared to its previous dates (yesterday).
SELECT
    t1.id
FROM
    Weather t1,
    Weather t2
WHERE
    TO_DAYS(t1.recordDate) = TO_DAYS(t2.recordDate) + 1
    AND t1.temperature > t2.temperature;
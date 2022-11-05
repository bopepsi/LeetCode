-- Table: Courses
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | student     | varchar |
-- | class       | varchar |
-- +-------------+---------+
-- (student, class) is the primary key column for this table.
-- Each row of this table indicates the name of a student and the class in which they are enrolled.
-- Write an SQL query to report all the classes that have at least five students.
-- V1
SELECT
    t.class
FROM
    (
        SELECT
            c.class AS class,
            count(*) AS nums
        FROM
            Courses c
        GROUP BY
            c.class
    ) t
WHERE
    t.nums >= 5;

-- V2
SELECT
    c.class
FROM
    Courses c
GROUP BY
    c.class
HAVING
    COUNT(*) >= 5;
    
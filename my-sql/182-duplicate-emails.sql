--  Table: Person
--  +-------------+---------+
--  | Column Name | Type    |
--  +-------------+---------+
--  | id          | int     |
--  | email       | varchar |
--  +-------------+---------+
--  id is the primary key column for this table.
--  Each row of this table contains an email. The emails will not contain uppercase letters.
-- V1
SELECT
    email AS Email
FROM
    (
        SELECT
            email,
            count(email) AS email_count
        FROM
            Person
        GROUP BY
            email
    ) as t1
WHERE
    t1.email_count > 1 

-- V2
SELECT
    DISTINCT t1.email AS Email
FROM
    Person t1,
    Person t2
WHERE
    t1.id != t2.id
    AND t1.email = t2.email
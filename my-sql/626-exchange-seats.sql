-- Table: Seat
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | student     | varchar |
-- +-------------+---------+
-- id is the primary key column for this table.
-- Each row of this table indicates the name and the ID of a student.
-- id is a continuous increment.
-- Write an SQL query to swap the seat id of every two consecutive students. If the number of students is odd, the id of the last student is not swapped.
SELECT
    t1.id AS id,
    IF(
        MOD(t1.id, 2) = 0,
        (
            SELECT
                student
            FROM
                Seat
            WHERE
                id = t1.id -1
        ),
        (
            IF (
                t1.id + 1 IN (
                    SELECT
                        id
                    FROM
                        Seat
                ),
                (
                    SELECT
                        student
                    FROM
                        Seat
                    WHERE
                        id = t1.id + 1
                ),
                t1.student
            )
        )
    ) AS student
FROM
    Seat t1;
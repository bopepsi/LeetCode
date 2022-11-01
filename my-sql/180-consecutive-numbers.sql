-- Input: 
-- Logs table:
-- +----+-----+                        + ----+-----+
-- | id | num |                        | id | num |
-- +----+-----+                        + ----+-----+
-- | 1  | 1   |                        | 1 | 1 || 1 | 1 || 1 | 1 |
-- | 2  | 1   |                        | 2 | 1 || 2 | 1 || 2 | 1 |
-- | 3  | 1   |                        | 3 | 1 || 3 | 1 || 3 | 1 |
-- | 4  | 2   |                        | 4 | 2 || 4 | 2 || 4 | 2 |
-- | 5  | 1   |                        | 5 | 1 || 5 | 1 || 5 | 1 |
-- | 6  | 2   |                        | 6 | 2 || 6 | 2 || 6 | 2 |
-- | 7  | 2   |                        | 7 | 2 || 7 | 2 || 7 | 2 |
-- +----+-----+                        + ----+-----+
-- Output: 
-- +-----------------+
-- | ConsecutiveNums |
-- +-----------------+
-- | 1               |
-- +-----------------+
-- Explanation: 1 is the only number that appears consecutively for at least three times.
--  Write an SQL query to find all numbers that appear at least three times consecutively.
--  Return the result table in any order.
SELECT
    t1.num AS "ConsecutiveNums"
FROM
    Logs t1,
    Logs t2,
    Logs t3
WHERE
    t1.id + 1 = t2.id
    AND t2.id + 1 = t3.id
    AND t1.num = t2.num
    AND t2.num = t3.num
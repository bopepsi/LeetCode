Input: 
Logs table:
+----+-----+                        + ----+-----+
| id | num |                        | id | num |
+----+-----+                        + ----+-----+
| 1  | 1   |                        | 1 | 1 || 1 | 1 || 1 | 1 |
| 2  | 1   |                        | 2 | 1 || 2 | 1 || 2 | 1 |
| 3  | 1   |                        | 3 | 1 || 3 | 1 || 3 | 1 |
| 4  | 2   |                        | 4 | 2 || 4 | 2 || 4 | 2 |
| 5  | 1   |                        | 5 | 1 || 5 | 1 || 5 | 1 |
| 6  | 2   |                        | 6 | 2 || 6 | 2 || 6 | 2 |
| 7  | 2   |                        | 7 | 2 || 7 | 2 || 7 | 2 |
+----+-----+                        + ----+-----+
Output: 
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
Explanation: 1 is the only number that appears consecutively for at least three times.

// Write an SQL query to find all numbers that appear at least three times consecutively.

// Return the result table in any order.


SELECT DISTINCT tb1.num
FROM 
    Logs AS tb1, Logs AS tb2, Logs AS tb3
WHERE
    tb2.id = tb1.id + 1 AND tb3.id = tb2.id + 1 AND
    tb2.nunm = tb1.num AND tb3.num = tb2.num

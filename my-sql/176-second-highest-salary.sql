Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
Output: 
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+

Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
Output: 
+---------------------+
| SecondHighestSalary |
+---------------------+
| null                |
+---------------------+

-- Write an SQL query to report the second highest salary
-- from
--     the Employee table.If there is no second highest salary,
--     the query should report null.The query result format is in the following example.

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT 
BEGIN 

DECLARE m INT;

SET
    m = N - 1;

RETURN (
    # Write your MySQL query statement below.
    SELECT
        Salary
    FROM
        Employee
    GROUP BY
        Salary
    ORDER BY
        Salary DESC
    LIMIT
        m, 1
);

END
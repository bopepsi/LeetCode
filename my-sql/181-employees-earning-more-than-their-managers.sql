-- Input: 
-- Employee table:
-- +----+-------+--------+-----------+
-- | id | name  | salary | managerId |
-- +----+-------+--------+-----------+
-- | 1  | Joe   | 70000  | 3         |
-- | 2  | Henry | 80000  | 4         |
-- | 3  | Sam   | 60000  | Null      |
-- | 4  | Max   | 90000  | Null      |
-- +----+-------+--------+-----------+
-- Output: 
-- +----------+
-- | Employee |
-- +----------+
-- | Joe      |
-- +----------+
-- Explanation: Joe is the only employee who earns more than his manager.
-- Write an SQL query to find the employees who earn more than their managers.Return the result table in any order.
-- V1
SELECT
    Res.eName AS Employee
FROM
    (
        SELECT
            t1.name AS eName,
            t1.salary AS eSalary,
            t2.salary AS mSalary
        FROM
            Employee t1
            JOIN Employee t2 ON t1.managerId = t2.id
    ) AS Res
WHERE
    Res.eSalary > Res.mSalary 

-- V2
SELECT
    t1.name AS Employee
FROM
    Employee t1,
    Employee t2
WHERE
    t1.managerId = t2.id
    AND t1.salary > t2.salary
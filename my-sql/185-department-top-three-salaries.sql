-- Table: Employee
-- +--------------+---------+
-- | Column Name  | Type    |
-- +--------------+---------+
-- | id           | int     |
-- | name         | varchar |
-- | salary       | int     |
-- | departmentId | int     |
-- +--------------+---------+
-- id is the primary key column for this table.
-- departmentId is a foreign key of the ID from the Department table.
-- Each row of this table indicates the ID, name, and salary of an employee. It also contains the ID of their department.
-- Table: Department
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | name        | varchar |
-- +-------------+---------+
-- id is the primary key column for this table.
-- Each row of this table indicates the ID of a department and its name.
-- V1
SELECT
    e.departmentId AS Department,
    e.name AS Employee,
    e.salary AS Salary
FROM
    Employee e
    JOIN Department d ON e.departmentId = d.id
WHERE
    (e.departmentId, e.salary) IN (
        SELECT
            e2.departmentId,
            e2.salary
        FROM
            Employee e2
        GROUP BY
            e2.salary
        ORDER BY
            e2.salary DESC
        LIMIT
            3
    );

-- V2
SELECT
    d.name AS Department,
    e.name AS Employee,
    e.salary AS Salary
FROM
    Employee e
    JOIN Department d ON e.departmentId = d.id
WHERE
    (
        SELECT
            COUNT(DISTINCT salary)
        FROM
            Employee e2
        WHERE
            e.departmentId = e2.departmentId
            AND e2.salary > e.salary
    ) < 3;

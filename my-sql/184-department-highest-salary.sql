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
    t1.department AS Department,
    t2.name AS Employee,
    t2.salary AS Salary
FROM
    (
        SELECT
            d.name AS department,
            e.departmentId AS dId,
            max(e.salary) AS maxSalary
        FROM
            Employee e
            JOIN Department d ON e.departmentId = d.id
        GROUP BY
            e.departmentId
    ) t1,
    Employee t2
WHERE
    t1.dId = t2.departmentId
    AND t1.maxSalary = t2.salary;

-- V2
SELECT
    d.name AS Department,
    e.name AS Employee,
    e.salary AS Salary
FROM
    Employee e
    JOIN Department d ON e.departmentId = d.id
WHERE
    (e.departmentId, e.salary) IN (
        SELECT
            e2.departmentId,
            max(e2.salary)
        FROM
            Employee e2
        GROUP BY
            departmentId
    );
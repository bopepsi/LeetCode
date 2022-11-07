-- Table: Employees
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | employee_id | int     |
-- | name        | varchar |
-- +-------------+---------+
-- employee_id is the primary key for this table.
-- Each row of this table indicates the name of the employee whose ID is employee_id.
-- Table: Salaries
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | employee_id | int     |
-- | salary      | int     |
-- +-------------+---------+
-- employee_id is the primary key for this table.
-- Each row of this table indicates the salary of the employee whose ID is employee_id.
-- Write an SQL query to report the IDs of all the employees with missing information. The information of an employee is missing if:
-- The employee's name is missing, or
-- The employee's salary is missing.
-- V1
SELECT
    t.employee_id
FROM
    Employees t
WHERE
    t.employee_id NOT IN (
        SELECT
            e.employee_id
        FROM
            Employees e
            JOIN Salaries s ON e.employee_id = s.employee_id
    )
UNION
SELECT
    t2.employee_id
FROM
    Salaries t2
WHERE
    t2.employee_id NOT IN (
        SELECT
            e2.employee_id
        FROM
            Employees e2
            JOIN Salaries s2 ON e2.employee_id = s2.employee_id
    )
ORDER BY
    employee_id;

-- V2
select
    employee_id
from
    (
        select
            employee_id
        from
            employees
        where
            employee_id not in (
                select
                    employee_id
                from
                    salaries
            )
        union
        select
            employee_id
        from
            salaries
        where
            employee_id not in (
                select
                    employee_id
                from
                    employees
            )
    ) e
order by
    employee_id;
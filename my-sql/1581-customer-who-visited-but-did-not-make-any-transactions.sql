-- Table: Visits
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | visit_id    | int     |
-- | customer_id | int     |
-- +-------------+---------+
-- visit_id is the primary key for this table.
-- This table contains information about the customers who visited the mall.
-- Table: Transactions
-- +----------------+---------+
-- | Column Name    | Type    |
-- +----------------+---------+
-- | transaction_id | int     |
-- | visit_id       | int     |
-- | amount         | int     |
-- +----------------+---------+
-- transaction_id is the primary key for this table.
-- This table contains information about the transactions made during the visit_id.
-- Write an SQL query to find the IDs of the users who visited without making any transactions and the number of times they made these types of visits.
-- V1
SELECT
    t1.customer_id,
    COUNT(t1.customer_id) AS "count_no_trans"
FROM
    (
        SELECT
            v.visit_id AS visit_id,
            v.customer_id AS customer_id,
            t.transaction_id AS transaction_id,
            t.amount AS amount
        FROM
            Visits v
            LEFT JOIN Transactions t ON v.visit_id = t.visit_id
    ) AS t1
WHERE
    t1.transaction_id IS NULL
GROUP BY
    t1.customer_id;

-- V2
SELECT
    customer_id,
    COUNT(v.visit_id) as count_no_trans
FROM
    Visits v
    LEFT JOIN Transactions t ON v.visit_id = t.visit_id
WHERE
    transaction_id IS NULL
GROUP BY
    customer_id;

-- V3
SELECT
    customer_id,
    COUNT(visit_id) as count_no_trans
FROM
    Visits
WHERE
    visit_id NOT IN (
        SELECT
            visit_id
        FROM
            Transactions
    )
GROUP BY
    customer_id;

-- V4
SELECT
    customer_id,
    COUNT(visit_id) as count_no_trans
FROM
    Visits v
WHERE
    NOT EXISTS (
        SELECT
            visit_id
        FROM
            Transactions t
        WHERE
            t.visit_id = v.visit_id
    )
GROUP BY
    customer_id;
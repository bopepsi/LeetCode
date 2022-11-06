-- Table: Product
-- +--------------+---------+
-- | Column Name  | Type    |
-- +--------------+---------+
-- | product_id   | int     |
-- | product_name | varchar |
-- | unit_price   | int     |
-- +--------------+---------+
-- product_id is the primary key of this table.
-- Each row of this table indicates the name and the price of each product.
-- Table: Sales
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | seller_id   | int     |
-- | product_id  | int     |
-- | buyer_id    | int     |
-- | sale_date   | date    |
-- | quantity    | int     |
-- | price       | int     |
-- +-------------+---------+
-- This table has no primary key, it can have repeated rows.
-- product_id is a foreign key to the Product table.
-- Each row of this table contains some information about one sale.
-- Write an SQL query that reports the products that were only sold in the first quarter of 2019. That is, between 2019-01-01 and 2019-03-31 inclusive.
-- V1
SELECT
    DISTINCT t1.product_id,
    t2.product_name
FROM
    Sales t1
    JOIN Product t2 ON t1.product_id = t2.product_id
WHERE
    t1.product_id IN (
        SELECT
            s.product_id
        FROM
            Sales s
        WHERE
            s.sale_date BETWEEN "2019-01-01"
            AND "2019-03-31"
    )
    AND t1.product_id NOT IN (
        SELECT
            s.product_id
        FROM
            Sales s
        WHERE
            s.sale_date NOT BETWEEN "2019-01-01"
            AND "2019-03-31"
    );

-- V2
SELECT
    product_id,
    product_name
FROM
    Sales
    JOIN Product USING(product_id)
GROUP BY
    product_id
HAVING
    MIN(sale_date) >= '2019-01-01'
    AND MAX(sale_date) <= '2019-03-31';
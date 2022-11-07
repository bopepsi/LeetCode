-- Table: Products
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | product_id  | int     |
-- | store1      | int     |
-- | store2      | int     |
-- | store3      | int     |
-- +-------------+---------+
-- product_id is the primary key for this table.
-- Each row in this table indicates the product's price in 3 different stores: store1, store2, and store3.
-- If the product is not available in a store, the price will be null in that store's column.
-- Write an SQL query to rearrange the Products table so that each row has (product_id, store, price). If a product is not available in a store, do not include a row with that product_id and store combination in the result table.
-- Input: 
-- Products table:
-- +------------+--------+--------+--------+
-- | product_id | store1 | store2 | store3 |
-- +------------+--------+--------+--------+
-- | 0          | 95     | 100    | 105    |
-- | 1          | 70     | null   | 80     |
-- +------------+--------+--------+--------+
-- Output: 
-- +------------+--------+-------+
-- | product_id | store  | price |
-- +------------+--------+-------+
-- | 0          | store1 | 95    |
-- | 0          | store2 | 100   |
-- | 0          | store3 | 105   |
-- | 1          | store1 | 70    |
-- | 1          | store3 | 80    |
-- +------------+--------+-------+
SELECT
    p1.product_id,
    "store1" AS store,
    store1 AS price
FROM
    Products p1
WHERE
    p1.store1 IS NOT NULL
UNION
SELECT
    p2.product_id,
    "store2" AS store,
    store2 AS price
FROM
    Products p2
WHERE
    p2.store2 IS NOT NULL
UNION
SELECT
    p3.product_id,
    "store3" AS store,
    store3 AS price
FROM
    Products p3
WHERE
    p3.store3 IS NOT NULL
ORDER BY
    product_id;
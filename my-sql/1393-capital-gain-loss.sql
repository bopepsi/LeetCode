-- Table: Stocks
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | stock_name    | varchar |
-- | operation     | enum    |
-- | operation_day | int     |
-- | price         | int     |
-- +---------------+---------+
-- (stock_name, operation_day) is the primary key for this table.
-- The operation column is an ENUM of type ('Sell', 'Buy')
-- Each row of this table indicates that the stock which has stock_name had an operation on the day operation_day with the price.
-- It is guaranteed that each 'Sell' operation for a stock has a corresponding 'Buy' operation in a previous day. It is also guaranteed that each 'Buy' operation for a stock has a corresponding 'Sell' operation in an upcoming day.
-- Write an SQL query to report the Capital gain/loss for each stock.
SELECT
    s.stock_name,
    SUM(IF(s.operation = "Sell", s.price, 0 - s.price)) AS "capital_gain_loss"
FROM
    Stocks s
GROUP BY
    s.stock_name;
-- Table: DailySales
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | date_id     | date    |
-- | make_name   | varchar |
-- | lead_id     | int     |
-- | partner_id  | int     |
-- +-------------+---------+
-- This table does not have a primary key.
-- This table contains the date and the name of the product sold and the IDs of the lead and partner it was sold to.
-- The name consists of only lowercase English letters.
-- Write an SQL query that will, for each date_id and make_name, return the number of distinct lead_id's and distinct partner_id's.
-- | date_id   | make_name | unique_leads | unique_partners |
SELECT
    d.date_id,
    d.make_name,
    COUNT(DISTINCT d.lead_id) AS unique_leads,
    COUNT(DISTINCT d.partner_id) AS unique_partners
FROM
    DailySales d
GROUP BY
    d.date_id,
    d.make_name;
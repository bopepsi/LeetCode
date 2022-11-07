-- Table: Department
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | revenue     | int     |
-- | month       | varchar |
-- +-------------+---------+
-- (id, month) is the primary key of this table.
-- The table has information about the revenue of each department per month.
-- The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].
-- Write an SQL query to reformat the table such that there is a department id column and a revenue column for each month.
-- V1
SELECT
    id,
    SUM(IF (month = "Jan", revenue, null)) AS Jan_Revenue,
    SUM(IF (month = "Feb", revenue, null)) AS Feb_Revenue,
    SUM(IF (month = "Mar", revenue, null)) AS Mar_Revenue,
    SUM(IF (month = "Apr", revenue, null)) AS Apr_Revenue,
    SUM(IF (month = "May", revenue, null)) AS May_Revenue,
    SUM(IF (month = "Jun", revenue, null)) AS Jun_Revenue,
    SUM(IF (month = "Jul", revenue, null)) AS Jul_Revenue,
    SUM(IF (month = "Aug", revenue, null)) AS Aug_Revenue,
    SUM(IF (month = "Sep", revenue, null)) AS Sep_Revenue,
    SUM(IF (month = "Oct", revenue, null)) AS Oct_Revenue,
    SUM(IF (month = "Nov", revenue, null)) AS Nov_Revenue,
    SUM(IF (month = "Dec", revenue, null)) AS Dec_Revenue
FROM
    Department
GROUP BY
    id;

-- V2
SELECT
    Ids.id,
    January.revenue AS Jan_Revenue,
    Feburary.revenue AS Feb_Revenue,
    March.revenue AS Mar_Revenue,
    April.revenue AS Apr_Revenue,
    May.revenue AS May_Revenue,
    June.revenue AS Jun_Revenue,
    July.revenue AS Jul_Revenue,
    August.revenue AS Aug_Revenue,
    September.revenue AS Sep_Revenue,
    October.revenue AS Oct_Revenue,
    November.revenue AS Nov_Revenue,
    December.revenue AS Dec_Revenue
FROM
    (
        SELECT
            DISTINCT id
        FROM
            Department
    ) AS Ids
    LEFT JOIN Department AS January ON (
        Ids.id = January.id
        AND January.month = "Jan"
    )
    LEFT JOIN Department AS Feburary ON (
        Ids.id = Feburary.id
        AND Feburary.month = "Feb"
    )
    LEFT JOIN Department AS March ON (
        Ids.id = March.id
        AND March.month = "Mar"
    )
    LEFT JOIN Department AS April ON (
        Ids.id = April.id
        AND April.month = "Apr"
    )
    LEFT JOIN Department AS May ON (
        Ids.id = May.id
        AND May.month = "May"
    )
    LEFT JOIN Department AS June ON (
        Ids.id = June.id
        AND June.month = "Jun"
    )
    LEFT JOIN Department AS July ON (
        Ids.id = July.id
        AND July.month = "Jul"
    )
    LEFT JOIN Department AS August ON (
        Ids.id = August.id
        AND August.month = "Aug"
    )
    LEFT JOIN Department AS September ON (
        Ids.id = September.id
        AND September.month = "Sep"
    )
    LEFT JOIN Department AS October ON (
        Ids.id = October.id
        AND October.month = "Oct"
    )
    LEFT JOIN Department AS November ON (
        Ids.id = November.id
        AND November.month = "Nov"
    )
    LEFT JOIN Department AS December ON (
        Ids.id = December.id
        AND December.month = "Dec"
    );
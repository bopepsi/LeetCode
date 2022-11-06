-- Table: Activity
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | user_id       | int     |
-- | session_id    | int     |
-- | activity_date | date    |
-- | activity_type | enum    |
-- +---------------+---------+
-- There is no primary key for this table, it may have duplicate rows.
-- The activity_type column is an ENUM of type ('open_session', 'end_session', 'scroll_down', 'send_message').
-- The table shows the user activities for a social media website. 
-- Note that each session belongs to exactly one user.
-- Write an SQL query to find the daily active user count for a period of 30 days ending 2019-07-27 inclusively. A user was active on someday if they made at least one activity on that day.
-- V1
SELECT
    a.activity_date AS "day",
    COUNT(DISTINCT a.user_id) AS active_users
FROM
    Activity a
WHERE
    (
        DATEDIFF("2019-07-27", a.activity_date) BETWEEN 0
        AND 29
    )
GROUP BY
    a.activity_date;

-- V2
SELECT
    a.activity_date AS "day",
    COUNT(DISTINCT a.user_id) AS active_users
FROM
    Activity a
WHERE
    (
        a.activity_date <= "2019-07-27"
        AND a.activity_date > "2019-06-27"
    )
GROUP BY
    a.activity_date;
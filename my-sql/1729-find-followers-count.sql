-- Table: Followers
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | user_id     | int  |
-- | follower_id | int  |
-- +-------------+------+
-- (user_id, follower_id) is the primary key for this table.
-- This table contains the IDs of a user and a follower in a social media app where the follower follows the user.
-- Write an SQL query that will, for each user, return the number of followers.
SELECT
    f.user_id,
    COUNT(f.follower_id) AS followers_count
FROM
    Followers f
GROUP BY
    f.user_id
ORDER BY
    f.user_id;
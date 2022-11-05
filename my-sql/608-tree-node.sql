-- Table: Tree
-- +-------------+------+
-- | Column Name | Type |
-- +-------------+------+
-- | id          | int  |
-- | p_id        | int  |
-- +-------------+------+
-- id is the primary key column for this table.
-- Each row of this table contains information about the id of a node and the id of its parent node in a tree.
-- The given structure is always a valid tree.
-- Each node in the tree can be one of three types:
-- "Leaf": if the node is a leaf node.
-- "Root": if the node is the root of the tree.
-- "Inner": If the node is neither a leaf node nor a root node.
-- Write an SQL query to report the type of each node in the tree.
-- V1
SELECT
    id,
    CASE
        WHEN t.id = (
            SELECT
                t1.id
            FROM
                Tree t1
            WHERE
                t1.p_id IS NULL
        ) THEN "ROOT"
        WHEN t.id IN (
            SELECT
                t2.p_id
            FROM
                Tree t2
        ) THEN "INNER"
        ELSE "LEAF"
    END AS "type"
FROM
    Tree t
ORDER BY
    t.id;

-- V2
-- Root: ele with no p_id
-- Inner: is a p_id in Tree, has a p_id
-- Leaf: is not a p_id in Tree, also has a p_id
SELECT
    id,
    "Root" AS type
FROM
    Tree
WHERE
    p_id IS NULL
UNION
SELECT
    t1.id AS id,
    "Inner" AS type
FROM
    Tree t1
WHERE
    t1.id IN (
        SELECT
            t2.p_id
        FROM
            Tree t2
        WHERE
            t2.p_id IS NOT NULL
    )
    AND t1.p_id IS NOT NULL
UNION
SELECT
    t3.id,
    "Leaf" AS type
FROM
    Tree t3
WHERE
    t3.id NOT IN (
        SELECT
            t4.p_id
        FROM
            Tree t4
        WHERE
            t4.p_id IS NOT NULL
    )
    AND t3.p_id IS NOT NULL
ORDER BY
    id;
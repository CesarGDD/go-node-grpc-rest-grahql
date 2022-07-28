-- name: GetUsers :many
SELECT * FROM users
ORDER BY id;

-- name: GetUser :one
SELECT * FROM users
WHERE id = $1;

-- name: DeleteUser :one
DELETE FROM users
WHERE id = $1
RETURNING *;

-- name: CreateUser :one
INSERT INTO users (username, password)
VALUES ($1, $2)
RETURNING *;


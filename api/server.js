const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = process.env.PORT || 4000;

app.get('/status', async (req, res) => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
  });

  const [rows] = await connection.query('SELECT NOW() AS now');
  await connection.end();

  res.json({
    status: 'ok',
    dbTime: rows[0].now,
    dbHost: process.env.DB_HOST,
  });
});

app.listen(port, () => {
  console.log(`API service listening on port ${port}`);
});

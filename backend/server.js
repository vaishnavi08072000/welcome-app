const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin@1234',
    database: 'newdb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.use(express.static('public'));

app.get('/api/message', (req, res) => {
    db.query('SELECT message FROM messages LIMIT 1', (err, result) => {
        if (err) throw err;
        res.json({ message: result[0].message });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


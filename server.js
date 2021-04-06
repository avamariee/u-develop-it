const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');



// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Conect to mySQL database >> 

const db = mysql.createConnection(
    {
        host: 'localhost',

        // Your  MySQL username,
        user: 'root',

        // Your MySQL Password
        password: 'Bonjovilol1!2!3!',

        database: 'election'

    },

    console.log('Connected to the election database.')
);


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World.'
    });
});

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// GET a single candidate from the table
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(row);
// })

// Delete a candidate from the table
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err,result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// })

// Create a candidate >>
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
VALUES (?,?,?,?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if(err) {
        console.log(err);
    }
    console.log(result);
});


// default response for any other request (NOT FOUND) >>
// make sure this is the last route or it will override all of the other routes
app.use((req, res) => {
    res.status(404).end();
})

// always put the listen at the bottom

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `);
});

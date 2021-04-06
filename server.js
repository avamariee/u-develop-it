const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req,res) => {
    res.json({
        message: 'Hello World.'
    });
});

// default response for any other request (NOT FOUND) >>
// make sure this is the last route or it will override all of the other routes
app.use((req,res) => {
    res.status(404).end();
})

// always put the listen at the bottom

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `);
});

const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect DataBase
connectDB();

app.get('/', (req,res) => 
    res.json({msg : 'Welcom to the contact keeper API'})
);

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server stated on port ${PORT}`));
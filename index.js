const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://sehee:DLSfb4475@cluster0.mlfxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

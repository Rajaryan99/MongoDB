const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const port = 3000;


app.set('view engine', "ejs");
app.set('views', path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")))

main().then(() => {
    console.log('Connected Successful')
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/', (req, res) => {
    res.send('Root is working')
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})
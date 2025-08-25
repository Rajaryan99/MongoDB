const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const chat = require('./models/chat.js');

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

// let chat1 = new chat({
//     from: "neha",
//     to: "nikita",
//     msg: "send me notes",
//     created_at: new Date(),
// });

// chat1.save().then((res) => {
//     console.log(res);
// });


app.get('/', (req, res) => {
    res.send('Root is working')
});

app.get('/chats', async (req, res) => {
    let chats = await chat.find();
    res.render('index.ejs', { chats })
})

app.get('/chats/new', (req, res) => {
    res.render('new.ejs')
});

app.post('/chats', (req, res) => {
    let { from, to, msg } = req.body;
    let newchat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });

    newchat
        .save()
        .then((res) => {
            console.log('Chat was saved')
        })
        .catch((err) => {
            console.log(err);
        });

    res.redirect('/chats')
})




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})



const mongoose = require('mongoose');

const chat = require('./models/chat.js');

main().then(() => {
    console.log('Connected Successful')
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


let allChats = [
    {
        from: "raj",
        to: 'nik',
        msg: "kya kya bol ra hai bhai..",
        created_at: new Date(),
    },

    {
        from: "vis",
        to: 'nik',
        msg: "kya be sharma",
        created_at: new Date(),
    },

    {
        from: "deept",
        to: 'batu',
        msg: "kya haal hai bhain chal cigarette pine chakte hai",
        created_at: new Date(),
    },

    {
        from: "madhuri",
        to: 'tahir',
        msg: "baby tu mujhe pyar karte ho ki nai..",
        created_at: new Date(),
    },

    {
        from: "sakshi",
        to: 'sanjna',
        msg: "kya kar ri hia babu",
        created_at: new Date(),
    },
]

chat.insertMany(allChats);
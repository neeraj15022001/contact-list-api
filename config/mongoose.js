const mongoose = require('mongoose');

const db = main().catch(err => console.log(err));
db
    .then(res => {
        // console.log("DB Initialized Successfully", res)
        module.exports = res;
    })
    .catch(e => {
        // console.log("Error while configuring DB", e);
    })

async function main() {
    return await mongoose.connect('mongodb+srv://contactListUser:mongo123@contact.veocq.mongodb.net/contacts?retryWrites=true&w=majority');
}

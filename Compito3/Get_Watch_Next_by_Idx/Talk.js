const mongoose = require('mongoose');

const talk_schema = new mongoose.Schema({
    _id: String,
    title: String,
    url: String,
    details: String,
    main_author: String
}, { collection: 'MyTedX' });

module.exports = mongoose.model('talk', talk_schema);
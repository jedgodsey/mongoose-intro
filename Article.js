const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 200,
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        isPublic: Boolean,
        comments: [
            {
                body: String,
                date: Date,
            }
        ],
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        // },
    }
}, {timestamps: true});

// Models are singular and capitalized
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

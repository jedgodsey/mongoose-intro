const db = require('./models');

// Article Seed Data

const articleData1 = {
    title: 'Article One',
    body: 'this is article 1 body',
    author: 'Jane Doe',
    isPublic: true,
}

const articleData2 = {
    title: 'Article Two',
    body: 'this is article 2 body',
    author: 'Jane Doe',
    isPublic: false,
}

const articles = [articleData1, articleData2]

// -------------- CREATE

//create one article
//create() takes an object and callback function
//the callback is 'error first'
// always handle the error first
// db.Article.create(articleData2, (error, createdArticle) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(createdArticle);
//         console.log(error);
//     }
//     process.exit();
// })

// --------------------------- FIND
// db.Article.find({}, (error, allArticles) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(allArticles);
//     }
//     process.exit();
// });

// check this one
// db.Article.find({isPublic: true}, (error, allPublicArticles) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(allPublicArticles);
//     }
//     process.exit();
// });

// db.Article.find({title: 'Article One'}, (error, filteredArticles) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(filteredArticles);
//     }
//     process.exit();
// });

// db.Article.findById('5f77a4062390d991d298913b', (error, foundArticle) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(foundArticle);
//     }
//     process.exit();
// });

// db.Article.findOne({author: 'Jane Doe'}, (error, foundArticle) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log(foundArticle);
//     }
//     process.exit();
// });

// db.Article.findByIdAndUpdate(
//     '5f77a4062390d991d298913b',
//     {
//         title: 'Mongoose is wicked',
//     },
//     {new: false}, //=== updated record, new: false === original record before change
//     (error, updatedArticle) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log(updatedArticle)
//         }
//         process.exit();
//     }
// )

db.Article.findByIdAndDelete('5f77a4062390d991d298913b', (error, deletedArticle) => {
    if(error) {
        console.log(error);
    } else {
        console.log(deletedArticle);
    }
    process.exit();
});

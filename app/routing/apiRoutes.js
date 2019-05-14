let friendArray = require('../data/friends');

// routes for friend.js file

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendArray);
    });

    app.post('/api/friends', (req, res) => {
        //run through friend array linked to the survey questions
        // need to complete function funs through every friend and pairs with the correct person based on answers
    

    });

};

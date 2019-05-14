const friendArray = require('../data/friends');

// routes for friend.js file

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendArray);
    });

    app.post('/api/friends', (req, res) => {
        //run through friend array linked to the survey questions
        // need to complete function funs through every friend and pairs with the correct person based on answers
        let newUser = req.body;
        let score = newUser.scores;
        let name = newUser.name;
        let photo = newUser.photo;
        let total = 0;
        let match = {
            name: '',
            photo: '',
            difference: 100
        }

        friendArray.forEach(result => {
            console.log(result.name);
            total = 0;
            let user;
            for (user in result) {
                total += Math.abs(parseInt(score) - parseInt(result.score));
                if (total <= match.difference) {
                    match.name = result.name;
                    match.photo = result.photo;
                    match.difference = total;
                }
            }
        })

        friendArray.push(user);

        res.json(match);
    });

};

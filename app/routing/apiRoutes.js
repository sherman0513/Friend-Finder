const friendArray = require('../data/friends');

// routes for friend.js file

module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friendArray);
    });

    app.post('/api/friends', (req, res) => {
        //run through friend array linked to the survey questions
        // need to complete function runs through every friend and pairs with the correct person based on answers
        // function is still not working as it should be. still need to trouble shoot to get it working
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
            let newUser;
            result.forEach(res => {
                total += Math.abs(parseInt(score) - parseInt(res.score));
                if (total <= match.difference) {
                    match.name = res.name;
                    match.photo = res.photo;
                    match.difference = total;
                }
            }
            )

            result.push(newUser);

            res.json(match);
        });

    });
};

let path = require('path');


// routes for html pages: home page and survey page

module.exports = (app) => {

    app.use('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });
    
};
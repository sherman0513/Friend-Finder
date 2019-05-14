const express = require('express');

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, () => {
    console.log('App is listening on localhost: ' + 3000);
});

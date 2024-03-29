// access information from command line arguments (node index.js foo bar baz) 
    // console.log(process.argv);
    // const foo = process.argv[2];
    // console.log(foo);

// access information through envirnoment variables on MY machine (see variables by typing 'env' in cli)
    // console.log(process.env); // prints env object
    // console.log(process.env.USER);

    // ::::::::::::::::::::::::::::

// looks for file .env
// add this line as the first thing to run
require('dotenv').config();

const express = require('express');

const server = express();

server.use(express.json());

server.get('/hello', (req, res) => {
    res.json('hello');
})

// when deploying on heroku, use its environment port, otherwise 9000
    // You can deploy to heroku by connecting heroku account to github OR by using the heroku cli commands
    // PORT declared in .env file
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
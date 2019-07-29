import express from 'express';
const router = express.Router();
const appController = require('../../controller/appController');


// Returns a message if the server is running
router.get('/api/hello', (req, res) => {
    res.send({ express: 'Express back-end, up and running!',
    });
});

// Using controllers for the routes
router.route('/api/sql')
    .post(appController.connectAndShow)
    .get(appController.connectAndShow);

// Testing for posts
router.post('/api/world', (req, res) => {
    
    res.send(
        `I received your  request. This is what you sent me: ${req.body.post}`,
        
    );
    console.log("From index file: " + req.body.get);
});

export default router;


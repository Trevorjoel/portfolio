import express from 'express';
const router = express.Router();

// Returns a message if the server is running
router.get('/api/hello', (req, res) => {
    res.send({ express: 'Express back-end, up and running!',
    });
});
router.post('/api/world', (req, res) => {
    console.log("From index file: " + req.body.post);
    res.send(
        `I received your  request. This is what you sent me: ${req.body.post}`,
    );
});
export default router;


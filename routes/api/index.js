import express from 'express';

const router = express.Router();
const appController = require('../../controller/appController');
const {check} = require('express-validator');
const app = express();
app.use(express.json());

// Returns a message if the server is running
router.get('/api/hello', (req, res) => {
    res.send({
        express: 'Express back-end, up and running!',
    });
});

// Using controllers for the main sql routes
router.route('/api/sql')
    .get(appController.connectAndShow)
    .delete(appController.deleteByID)
    .post(appController.populateTable);

router.route('/api/add')
    .post([check('firstName', 'Message text')
            .isAlpha()
            .not().isEmpty()
            .trim()
            .escape(),
            check('lastName', 'failed')
                .isAlpha()
                .not().isEmpty()
                .trim()
                .escape(),
            check('departmentID', 'Failed')
                .not().isEmpty()
                .isNumeric()
                .trim()
                .escape()
        ],
        
        appController.addEmployee);

// Handle the contact form email
router.route('/api/send')
    .post(appController.emailer);



// AQUAPONICS API

router.route('/api/ap')
    .post(appController.addReadings)
.get(appController.getPreviousTime);

router.route('/api/all')
    .post(appController.select_recent_readings);
export default router;




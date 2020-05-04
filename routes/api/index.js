import express from 'express';

const router = express.Router();
const appController = require('../../controller/appController');
const Aquaponics = require('../../controller/aquaponicsController');
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
// Todo: Research decent patterns concerning routes eg. user/:id
router.route('/api/ap')
    .post(Aquaponics.add_reading)
    .get(Aquaponics.get_previous_time);

// Under Construction
/*router.route('/api/fish')
    .get(Aquaponics.select_fish_parameters)*/

router.route('/api/all')
    .post(Aquaponics.select_recent_readings);
export default router;




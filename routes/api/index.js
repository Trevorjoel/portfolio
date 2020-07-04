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
router.route('/api/fish')
    .post(Aquaponics.select_fish_parameters);

router.route('/api/all')
    .post(Aquaponics.select_recent_readings);

router.route('/api/minmax')
    .get(Aquaponics.select_first_last_readings);

router.route('/api/allfish')
    .get(Aquaponics.select_fish);

router.route('/api/range')
    .post(Aquaponics.select_readings_range);

router.route('/api/addsettings')
    .post(Aquaponics.add_settings);

router.route('/api/addtempsettings')
    .post([check('setting_name', 'failed')
            .isAlpha()
            .not().isEmpty()
            .trim()
            .escape(),
        ],
        Aquaponics.add_temp_settings);

router.route('/api/addphpsettings')
    .post([check('setting_name', 'failed')
            .isAlpha()
            .not().isEmpty()
            .trim()
            .escape(),
        ],
        Aquaponics.add_ph_settings);

router.route('/api/addnh3psettings')
    .post([check('setting_name', 'failed')
            .isAlpha()
            .not().isEmpty()
            .trim()
            .escape(),
        ],
        Aquaponics.add_nh3_settings);

export default router;




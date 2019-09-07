import express from 'express';
import {sanitizeBody} from "express-validator";
const router = express.Router();
const appController = require('../../controller/appController');
const { check } = require('express-validator');
const app = express();
app.use(express.json());

// Returns a message if the server is running
router.get('/api/hello', (req, res) => {
    res.send({ express: 'Express back-end, up and running!',
    });
});

// Using controllers for the main sql routes
router.route('/api/sql')
   .get(appController.connectAndShow)
    .delete(appController.deleteByID);

// Handle the contact form email
router.route('/api/send')
    .post(appController.emailer);

// Testing routes and validation handlers
router.route('/api/world')
  .post([
      check('post')
      .isEmail()
      .withMessage('Please check your email entry')
          .normalizeEmail(),
          check('anotherValue')
              .not().isEmpty()
              .trim() // Returns the string stripped of whitespaces from both ends of the string
              .escape(), // Encodes special characters, with the exception of: * @ - _ + . /
          sanitizeBody('notifyOnReply').toBoolean()]
      ,appController.validate
  );


export default router;


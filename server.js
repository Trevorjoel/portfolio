import express from 'express';
import router from './routes/api/index';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`LISTENING on port ${port}`));
// Use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);




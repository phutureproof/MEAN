const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const api = express();
const router = express.Router();

const portNumber = 3000;

api.use(helmet());
api.use(cors());
api.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mean-sample-app');

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb connection made.")
});

router.route('/:model').get((req, res) => {
    console.log(`Request for ${req.params.model} caught.`);
    const model = require(`./models/${req.params.model}`);
    model.find({}, (err, docs) => {
        res.json(docs);
        console.log(`Sending ${docs.length} records.`);
    });
});

router.route('/:model').post((req, res) => {
    console.log(`Request for ${req.params.model} with options caught.`);
    const model = require(`./models/${req.params.model}`);
    model.find({}, req.body.columns, (err, docs) => {
        res.json(docs);
    });
});

router.route('/:model/:id').get((req, res) => {
    console.log(`Request for ${req.params.model} with id of ${req.params.id} caught.`);
    const model = require(`./models/${req.params.model}`);
    model.findById(req.params.id, (err, docs) => {
        res.json(docs);
        console.log(`Sending records with id: ${docs._id}`);
    });
});

router.route('/:model/:id/update').post((req, res) => {
    console.log(`Request to update ${req.params.model} with id of ${req.params.id} caught.`)
    const model = require(`./models/${req.params.model}`);
    model.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
        res.json(doc);
        console.log("Successfully updated record.")
    });
});

router.route('/:model/:id/delete').get((req, res) => {
    console.log(`Delete request for ${req.params.model} with id of ${req.params.id}`);
    const model = require(`./models/${req.params.model}`);
    model.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json(doc);
            console.log("Record deleted.");
        }
    });
});

api.use('/', router);

api.listen(portNumber, () => console.log(`Server running on port: ${portNumber}.`));

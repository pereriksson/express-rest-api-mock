import express from 'express';
import {data} from "../data/data";

const router = express.Router();

router.get('/:collection', (req, res) => {
    let collection = req.params.collection;

    res.send(JSON.stringify(data[collection]));
});

router.post('/:collection', (req, res) => {
    let collection = req.params.collection;

    let highestId = data[collection].reduce((a, u) => u.id > a ? u.id : a, 0);
    let newEntity = req.body;
    newEntity.id = highestId + 1;
    data[collection].push(newEntity);
    res.send(JSON.stringify(newEntity));
});

router.delete('/:collection/:id', (req, res) => {
    let collection = req.params.collection;
    let id = parseInt(req.params.id);

    if (data[collection].find((e) => e.id === id)) {
        data[collection] = data[collection].filter((e) => e.id !== id);
        res.status(200).send();
    } else {
        res.status(404).send();
    }
});

router.get('/:collection/:id', (req, res) => {
    let collection = req.params.collection;
    let id = parseInt(req.params.id);

    let entity = data[collection].find((e) => e.id === id);

    if (entity) {
        res.status(200).send(JSON.stringify(entity));
    } else {
        res.status(404).send();
    }
});

router.put('/:collection/:id', (req, res) => {
    let collection = req.params.collection;
    let id = parseInt(req.params.id);

    if (data[collection].find((e) => e.id === id)) {
        let index = data[collection].findIndex((e) => e.id === id);
        data[collection][index] = req.body;
        res.send(JSON.stringify(req.body));
    } else {
        res.status(404).send();
    }
});

export default router;
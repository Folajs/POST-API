const Kitten = require('../models/kitten')
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/postapi-db'

const getAPIs= ('/', async (req, res) => {
    try {
        await mongoose.connect(url);

        const kittens = await Kitten.find();
        console.log(kittens)
        if (kittens.length > 0) {
            res.status(200).json({'message': 'Successful', 'data': kittens});
        } else {
            res.status(200).json({'message': 'No data'});
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
const getAPI=('/:id', async (req, res) => {
    try {
        const _id = req.params.id;

        await mongoose.connect(url);

        const kitten = await Kitten.findById(_id);

        if (kitten) {
            res.json({'message': 'Successful', 'data':kitten});
        } else {
            res.status(404).json();
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
const postAPI=('/', async (req, res) => {
    try {
        await mongoose.connect(url);

        const kitten = new Kitten(req.body);
        const result = await kitten.save();

        if (result) {
            res.json({'message': 'Successful', 'data':kitten});
        } else {
            res.status(500).json({
                message: 'Record not inserted, received false'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
const putAPI=('/:id', async (req, res) => {
    try {

        const _id = req.params.id;

        await mongoose.connect(url);

        const result = await Kitten.findByIdAndUpdate(_id, req.body);

        if (result) {
            res.json({'message': 'Successful', 'data':req.body});
        } else {
            res.status(500).json({
                message: 'Record not inserted, received false'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
const delAPI=('/:id', async (req, res) => {
    try {

        const _id = req.params.id;

        await mongoose.connect(url);

        const result = await Kitten.findByIdAndRemove(_id);

        if (result) {
            res.json({'message': 'Successful', 'data':result});
        } else {
            res.status(500).json({
                message: 'Record not inserted, received false'
            });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports ={
    getAPIs,
    getAPI,
    postAPI,
    putAPI,
    delAPI
}
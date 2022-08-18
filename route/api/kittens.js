const express = require('express')
const mongoose = require('mongoose')
const {
getAPIs,
getAPI,
postAPI,
putAPI,
delAPI
} = require('../../controller/APIController')

const router = express.Router();

const url = 'mongodb://localhost:27017/postapi-db'

router.get('/', getAPIs)
router.get('/:id',getAPI)
router.post('/',postAPI)
router.put('/:id',putAPI)
router.delete('/:id',delAPI);


module.exports = router;
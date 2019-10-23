var express = require('express');
var router = express.Router();

const dogsController = require('../../controllers/dogs_controller');

router.get('/', dogsController.list);
router.post('/', dogsController.save);
router.get('/:id', dogsController.fetch);

module.exports = router;
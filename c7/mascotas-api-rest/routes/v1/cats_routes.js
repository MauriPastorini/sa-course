var express = require('express');
var router = express.Router();
var catsControler = require('../../controllers/cats_controller');

router.get('/', catsControler.list);
router.post('/', catsControler.save);
router.get('/:id', catsControler.fetch);


module.exports = router;
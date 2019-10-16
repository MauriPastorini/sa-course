const router = require('express').Router();

const {
    authAdmin,
    authenticateUser,
    auth,
    checkUserIdSameIfRoleUser
} = require('../../midlewares/auth');
const usersController = require('../../controllers/user_controller');


router.post('/', (req, res, next) => {
    req.role = 'user';
    next()
}, usersController.createUser);

router.get('/', authAdmin, usersController.getUsers);
router.get('/:userId', auth, checkUserIdSameIfRoleUser, usersController.getUserInfoId);
router.post('/me/auth', authenticateUser);

router.post('/:userId/messages', authAdmin, usersController.sendMessage);

module.exports = router;
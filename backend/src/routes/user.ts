import express from 'express';
import UserController from '../controllers/user.controllers';

const router = express.Router();
const usersController = new UserController();

router.post('/login', usersController.createUser.bind(usersController));

router.post('/logout', (req, res) => {
	console.log('logout');
});

router.get('/login-status', (req, res) => {
	console.log('login-status');
});

export default router;

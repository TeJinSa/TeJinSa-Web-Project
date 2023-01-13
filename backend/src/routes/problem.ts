import express from 'express';
import ProblemController from '../controllers/problem.controllers';
import AuthMiddleware from '../middlewares/auth';

const router = express.Router();
const problmesController = new ProblemController();
const authMiddleware = new AuthMiddleware();

router.post(
  '/',
  authMiddleware.isLogined,
  authMiddleware.checkRequestUser,
  problmesController.createProblem.bind(problmesController)
);

export default router;

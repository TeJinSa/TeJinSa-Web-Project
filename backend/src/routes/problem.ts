import express from 'express';
import ProblemController from '../controllers/problem.controllers';

const router = express.Router();
const problmesController = new ProblemController();

router.post('/problems', problmesController.createProblem.bind(problmesController));

export default router;

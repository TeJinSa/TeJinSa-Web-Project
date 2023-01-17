import express from 'express';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import ProblemController from '../controllers/problem.controllers';
import AuthMiddleware from '../middlewares/auth';
import { validateBody } from '../middlewares/validateBody';

const router = express.Router();
const problemsController = new ProblemController();
const authMiddleware = new AuthMiddleware();

class CreateProblemDTO {
  @IsString()
  @IsNotEmpty()
  link: string;

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  platformName: string;

  @IsString()
  @IsNotEmpty()
  levelName: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}

router.post(
  '/',
  authMiddleware.isLogined,
  authMiddleware.checkRequestUser,
  validateBody(CreateProblemDTO),
  problemsController.createProblem.bind(problemsController)
);

router.get('/', problemsController.findAllProblem.bind(problemsController));

export default router;

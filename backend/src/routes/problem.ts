import express from 'express';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import ProblemController from '../controllers/problem.controllers';
import AuthMiddleware from '../middlewares/auth';
import { validateBody } from '../middlewares/validateBody';
import { StringLiteral } from 'typescript';

const router = express.Router();
const problmesController = new ProblemController();
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
  problmesController.createProblem.bind(problmesController)
);

export default router;

import { NextFunction, Request, Response } from 'express';
import { BadRequestException } from '../error/httpException';
import ProblemService from '../services/problem.service';

class ProblemController {
  problemService = new ProblemService();

  public async createProblem(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const { platformName, levelName, id, ...createProblemData } = data;

      const platformLevel = await this.problemService.findPlatformLevel(platformName, levelName);
      if (platformLevel === null) throw new BadRequestException('플랫폼과 레벨정보가 잘못되었습니다.');

      await this.problemService.createProblem({ ...createProblemData, platformLevelId: platformLevel.id, userId: id });
      res.status(200).json({ isSuccess: true, code: 200, message: '성공' });
    } catch (err) {
      next(err);
    }
  }
}

export default ProblemController;

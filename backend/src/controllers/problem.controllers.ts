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

      const userId = await this.problemService.findUserId(id);
      if (userId !== null) {
        await this.problemService.createProblem({
          ...createProblemData,
          platformLevelId: platformLevel.id,
          userId: userId.userId,
        });
      }
      // await this.problemService.createProblem({
      //   ...createProblemData,
      //   platformLevelId: platformLevel.id,
      //   userId: userId.userId
      // });

      res.status(200).json({ isSuccess: true, code: 200, message: '성공' });
    } catch (err) {
      next(err);
    }
  }

  public async findAllProblem(req: Request<{}, {}, {}, { user: string }>, res: Response, next: NextFunction) {
    try {
      const user = req.query.user;
      let data;
      if (user === undefined) {
        data = await this.problemService.findAllProblem();
      } else {
        data = await this.problemService.findAllUserProblem(user);
      }
      res.status(200).json({ isSuccess: true, code: 200, message: '성공', data });
    } catch (err) {
      next(err);
    }
  }

  public async deleteProblem(req: Request, res: Response, next: NextFunction) {
    try {
      const problemId = Number(req.params.problemId);
      if (Number.isNaN(problemId)) {
        throw new BadRequestException('문제 id가 숫자가 아닙니다.');
      }

      const session: any = req.session;
      await this.problemService.deleteProblem(problemId, session.userGithubId);

      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

export default ProblemController;

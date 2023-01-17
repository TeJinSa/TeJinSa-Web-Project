import ProblemModel from '../models/problem.model';

export interface CreateProblem {
  userId: number;
  link: string;
  image: string;
  platformLevelId: number;
}

class ProblemService {
  problemModel = new ProblemModel();

  public async findPlatformLevel(platformName: string, levelName: string) {
    try {
      const platformLevel = await this.problemModel.findPlatformLevel(platformName, levelName);
      return platformLevel;
    } catch (err) {
      throw err;
    }
  }

  public async createProblem(data: CreateProblem) {
    try {
      await this.problemModel.createProblem(data);
    } catch (err) {
      throw err;
    }
  }
}

export default ProblemService;

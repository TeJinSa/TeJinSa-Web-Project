import { User } from '../entities/user.entity';
import ProblemModel from '../models/problem.model';
import UserModel from '../models/user.model';

export interface CreateProblem {
  userId: string;
  link: string;
  image: string;
  platformLevelId: number;
}

class ProblemService {
  problemModel = new ProblemModel();
  userModel = new UserModel();

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

  public async findAllProblem() {
    try {
      return await this.problemModel.findAllProblem();
    } catch (err) {
      throw err;
    }
  }

  public async findAllUserProblem(userId: string) {
    try {
      return await this.problemModel.findAllUserProblem(userId);
    } catch (err) {
      throw err;
    }
  }

  public async findUserId(id: number) {
    try {
      const res = await this.userModel.findUserId(id);
      return res;
    } catch (err) {
      throw err;
    }
  }

  public async deleteProblem(problemId: number, userId: string) {
    try {
      await this.problemModel.deleteProblem(problemId, userId);
    } catch (err) {
      throw err;
    }
  }
}

export default ProblemService;

import { db } from '../../ormconfig';
import { Problem } from '../entities/problem.entity';
import { PlatformLevel } from '../entities/platformLevel.entity';
import { CreateProblem } from '../services/problem.service';

class ProblemModel {
  problemEntity = db.getRepository(Problem);
  platformLevelEntity = db.getRepository(PlatformLevel);

  public async findPlatformLevel(platformName: string, levelName: string) {
    const res = await this.platformLevelEntity.findOneBy({ platformName, levelName });
    return res;
  }

  public async createProblem(data: CreateProblem) {
    const res = this.problemEntity.create(data);
    await this.problemEntity.save(res);
  }

  public async findAllProblem() {
    const res = await this.problemEntity
      .createQueryBuilder('problem')
      .select('problem.id', 'id')
      .addSelect('problem.link', 'link')
      .addSelect('problem.image', 'image')
      .addSelect('problem.userId', 'userId')
      .addSelect('problem.createdAt', 'createdAt')
      .addSelect('platformLevel.platformName', 'platformName')
      .addSelect('platformLevel.levelName', 'levelName')
      .leftJoin(PlatformLevel, 'platformLevel', 'platformLevel.id = problem.platformLevelId')
      .getRawMany();
    return res;
  }

  public async findAllUserProblem(userId: string) {
    const res = await this.problemEntity
      .createQueryBuilder('problem')
      .select('problem.id', 'id')
      .addSelect('problem.link', 'link')
      .addSelect('problem.image', 'image')
      .addSelect('problem.userId', 'userId')
      .addSelect('problem.createdAt', 'createdAt')
      .addSelect('platformLevel.platformName', 'platformName')
      .addSelect('platformLevel.levelName', 'levelName')
      .leftJoin(PlatformLevel, 'platformLevel', 'platformLevel.id = problem.platformLevelId')
      .where('problem.userId = :userId', { userId })
      .getRawMany();
    return res;
  }

  public async deleteProblem(problemId: number, userId: string) {
    await this.problemEntity
      .createQueryBuilder('problem')
      .softDelete()
      .where('id = :id', { id: problemId })
      .andWhere('userId = :userId', { userId })
      .execute();
  }
}

export default ProblemModel;

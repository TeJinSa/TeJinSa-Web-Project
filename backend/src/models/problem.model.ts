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
    console.log(data);
    // TODO: 왜 userId는 insert가 안 돼..ㅇㅅㅇ
    const res = this.problemEntity.create(data);
    await this.problemEntity.save(res);
  }
}

export default ProblemModel;

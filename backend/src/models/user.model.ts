import { db } from '../../ormconfig';
import { User } from '../entities/user.entity';

class UserModel {
  userEntity = db.getRepository(User);

  public async findUser(userId: string) {
    const res = await this.userEntity.findOneBy({ userId });
    return res;
  }

  public async createUser(userId: string) {
    const res = this.userEntity.create({ userId });
    await this.userEntity.save(res);
    return res;
  }
}

export default UserModel;

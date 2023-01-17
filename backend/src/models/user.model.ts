import { db } from '../../ormconfig';
import { User } from '../entities/user.entity';

class UserModel {
  userEntity = db.getRepository(User);

  public async findUser(userId: string) {
    console.log(userId);
    const res = await this.userEntity.findOneBy({ userId });
    return res;
  }

  public async createUser(userId: string) {
    const res = this.userEntity.create({ userId });
    await this.userEntity.save(res);
    return res;
  }

  public async findUserId(id: number) {
    const res = await this.userEntity.findOne({ where: { id }, select: { userId: true } });
    return res;
  }
}

export default UserModel;

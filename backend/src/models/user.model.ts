import { db } from '../../ormconfig';
import { User } from '../entities/user.entity';
import { loginData } from '../services/user.service';

class UserModel {
  userEntity = db.getRepository(User);

  public async findUser(userId: string) {
    const res = await this.userEntity.findOneBy({ userId });
    return res;
  }

  public async createUser(userData: loginData) {
    const res = this.userEntity.create(userData);
    await this.userEntity.save(res);
    return res;
  }
}

export default UserModel;

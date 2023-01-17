import { NextFunction, Request, Response } from 'express';
import { UnAuthorizedException } from '../error/httpException';

class AuthMiddleware {
  public isLogined(req: Request, res: Response, next: NextFunction) {
    const session: any = req.session;

    if (session.userId === undefined) throw new UnAuthorizedException('로그인을 해주세요.');
    else next();
  }

  public checkRequestUser(req: Request, res: Response, next: NextFunction) {
    const session: any = req.session;
    const sessionUser = session.userId;
    const requestUser = req.body.id;

    if (sessionUser === requestUser) next();
    else throw new UnAuthorizedException('권한이 없습니다.');
  }
}

export default AuthMiddleware;

import { validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { Request, Response, NextFunction } from 'express';
import { BadRequestException } from '../error/httpException';

export function validateBody(schema: { new (): any }) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const target = plainToClass(schema, req.body);
    try {
      await validateOrReject(target);

      next();
    } catch (error) {
      next(new BadRequestException('빈칸이 있거나 필요한 항목이 빠졌습니다.'));
    }
  };
}

import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    // response에 대한 결과값도 로깅을 해줄 건데 'finish'라는 이벤트( 리스폰스가 완료가 되었을 때의 이벤트를 등록해주는 키워드)
    res.on('finish', () => {
      this.logger.log(
        `${req.ip} ${req.method} ${res.statusCode} ${req.originalUrl}`,
      );
    });
    next();
  }
}

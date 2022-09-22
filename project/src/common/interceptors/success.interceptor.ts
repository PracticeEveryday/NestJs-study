import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // before는 미들웨어에서 처리를 많이 해주기에 interceptor 같은 경우엔 controller가 보냈을 때 데이터를 받아 가공해 filter처럼 사용할 수 있는 것이다.

    // const now = Date.now();
    return next.handle().pipe(
      // data에 컨트롤러에서 return 한 데이터가 온다고만 생각하자
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}

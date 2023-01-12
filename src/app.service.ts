import { Injectable } from '@nestjs/common';
import { sum } from 'lodash-es';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(sum([1, 2, 3]));

    return 'Hello World!';
  }
}

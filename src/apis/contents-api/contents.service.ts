import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentsService {
  ping() {
    return 'pong';
  }
}

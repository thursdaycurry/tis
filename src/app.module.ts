import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsApiModule } from './apis/contents-api/contents.module';

@Module({
  imports: [ContentsApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

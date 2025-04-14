import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsApiModule } from './apis/contents-api/contents.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ContentsApiModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.production.env'
          : process.env.NODE_ENV === 'stage'
          ? '.stage.env'
          : '.local.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}

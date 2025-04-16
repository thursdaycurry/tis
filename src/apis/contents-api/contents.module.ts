import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { ScraperModule } from 'lib/domain/scraper/scraper.module';
import { AiModule } from 'lib/domain/ai/ai.module';

@Module({
  imports: [ScraperModule, AiModule],
  controllers: [ContentsController],
  providers: [ContentsService],
})
export class ContentsApiModule {}

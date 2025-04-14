import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';
import { ContentsService } from './contents.service';
import { ScraperModule } from 'lib/domain/scraper/scraper.module';

@Module({
  imports: [ScraperModule],
  controllers: [ContentsController],
  providers: [ContentsService],
})
export class ContentsApiModule {}

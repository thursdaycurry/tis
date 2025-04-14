import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { CreateSummaryDto } from './dto/create-summary.dto';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post('/summary')
  async summarize(@Body() createSummaryDto: CreateSummaryDto) {
    return await this.contentsService.summarize(createSummaryDto.url);
  }

  @Get('/ping')
  ping(): string {
    return this.contentsService.ping();
  }
}

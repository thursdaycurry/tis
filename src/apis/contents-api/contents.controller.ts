import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { Response } from 'express';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post('/summary')
  async summarize(@Body() createSummaryDto: CreateSummaryDto) {
    const { url, language } = createSummaryDto;
    return await this.contentsService.summarize(url, language);
  }

  @Post('/tts')
  async textToSpeech(@Body() ttsDto, @Res() res: Response) {
    const { model, voice, input, language } = ttsDto;
    const filename = 'test-tts-audio';

    const audioStream = await this.contentsService.textToSpeech(
      model,
      voice,
      input,
      language,
    );

    res.set({
      'Content-Type': 'audio/mp3',
      'Content-Disposition': `inline; filename="${filename}.mp3`,
    });

    audioStream.pipe(res);
  }

  @Get('/ping')
  ping(): string {
    return this.contentsService.ping();
  }
}

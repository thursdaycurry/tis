import { BadRequestException, Injectable } from '@nestjs/common';
import { AiService } from 'lib/domain/ai/ai.service';

import { ScraperService } from 'lib/domain/scraper/scraper.service';
@Injectable()
export class ContentsService {
  constructor(
    private readonly scraperService: ScraperService,
    private readonly aiService: AiService,
  ) {}

  async summarize(url: string, language = 'Korean') {
    const response = await fetch(url, {});
    const html = await response.text();
    const { title, textContent, siteName, publishedTime } =
      this.scraperService.parseHtml(html, url);

    const articleSummary = await this.aiService.summarizeText(
      textContent,
      language,
    );

    const result = {
      title,
      siteName,
      publishedTime,
      content: articleSummary,
    };

    return result;
  }

  async textToSpeech(model, voice, input, language) {
    if (!input) throw new BadRequestException(`input text should be provided`);

    const audioStream = await this.aiService.createAudioWithText(
      model,
      voice,
      input,
      language,
    );

    return audioStream;
  }

  ping() {
    return 'pong';
  }
}

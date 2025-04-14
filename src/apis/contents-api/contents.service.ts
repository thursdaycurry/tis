import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ScraperService } from 'lib/domain/scraper/scraper.service';
@Injectable()
export class ContentsService {
  constructor(private readonly scraperService: ScraperService) {}

  async summarize(url: string, language = 'Korean') {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API || '',
    });

    const response = await fetch(url, {});
    const html = await response.text();
    const { title, textContent, siteName, publishedTime } =
      this.scraperService.parseHtml(html, url);

    const prompt = `You are professional article summary writer. Please summarize the <article> in language ${language}. <article>${textContent}</article>`;
    const articleSummary = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const result = {
      title,
      siteName,
      publishedTime,
      content: articleSummary.choices[0].message.content,
    };

    return result;
  }

  ping() {
    return 'pong';
  }
}

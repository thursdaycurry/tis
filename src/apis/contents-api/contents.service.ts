import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ScraperService } from 'lib/domain/scraper/scraper.service';
@Injectable()
export class ContentsService {
  constructor(private readonly scraperService: ScraperService) {}

  async summarize(url: string) {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API || '',
    });

    // const test = this.scraperService.ping();
    // console.log(`test`);
    // return test;

    const res = await fetch(url, {});
    const html = await res.text();
    const { title, textContent, siteName, publishedTime } =
      this.scraperService.parseHtml(html, url);

    const prompt = `You are professional article summary writer. Please summarize the <article>. <article>${textContent}</article>`;
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    return completion;
  }

  ping() {
    return 'pong';
  }
}

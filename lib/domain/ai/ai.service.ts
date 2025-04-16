import { Inject, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { DICT_AI } from './ai.provider';

@Injectable()
export class AiService {
  constructor(@Inject(DICT_AI.OPENAI) private readonly openAiClient: OpenAI) {}

  async summarizeText(textContent, language) {
    const prompt = `You are professional article summary writer. Please summarize the <article> in language ${language}. <article>${textContent}</article>`;

    const articleSummary = await this.openAiClient.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const result = articleSummary.choices[0].message.content;

    console.log(`result`, result);
    return result;
  }
}

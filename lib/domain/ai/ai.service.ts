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
    return result;
  }

  /**
   * This method is dependant on openai platform. Need to improve
   *
   * @param model 'gpt-4o-mini-tts'
   * @param voice 'alloy' -> [alloy, ash, ballad, coral, echo, fable, onyx, nova, sage, shimmer, verse].
   * @param input "모든 것은 마음으로부터 비롯된다."
   * @returns
   */
  async createAudioWithText(
    model = 'gpt-4o-mini-tts',
    voice = 'alloy',
    input,
    language,
  ) {
    const instructions = `Speak clearly and deliberately, like a spiritual leader addressing followers, with a calm, composed, and serene tone. ${
      language && `Speak in ${language}`
    }`;

    const res = await this.openAiClient.audio.speech.create({
      model,
      voice,
      input,
      instructions,
    });

    console.log(instructions);

    return res.body as unknown as NodeJS.ReadableStream;
  }
}

import { Provider } from '@nestjs/common';
import OpenAI from 'openai';

export const DICT_AI = {
  OPENAI: 'OpenAiClient',
};

export const OpenAiProvider: Provider = {
  provide: DICT_AI.OPENAI,
  useFactory: () => {
    return new OpenAI({
      apiKey: process.env.OPENAI_API,
    });
  },
};

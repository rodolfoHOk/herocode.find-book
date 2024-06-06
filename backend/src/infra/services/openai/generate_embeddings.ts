import OpenAI from 'openai';
import { HttpException } from '../../../types/HttpException';

export async function generateEmbeddings(input: string) {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  try {
    const response = await openai.embeddings.create({
      input,
      model: 'text-embedding-ada-002',
    });
    return response.data[0].embedding;
  } catch (error: any) {
    if (error.status === 429) {
      return [];
    }
    throw new HttpException(500, error.message);
  }
}

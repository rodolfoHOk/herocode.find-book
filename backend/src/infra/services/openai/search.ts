import OpenAI from 'openai';
import { HttpException } from '../../../types/HttpException';

export type GptResponse = {
  title: string;
  authors: string;
  categories: string;
  longDescription: string;
};

export async function searchOpenAI(input: string): Promise<GptResponse> {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `
            - Não é para buscar nada fora dos dados fornecidos.
            - Não é para inventar nenhuma informação. Quero apenas que retorne o que foi solicitado.
            - Preciso da resposta no formato JSON.
            - Lista de categorias: ['Ficção', 'Não-ficção, 'Romance', 'Terror', 'Aventura', 'Fantasia', 'Biografia', 'História', 'Autoajuda', 'Técnico', 'Infantil', 'Didático'].
            - Identificar se a mensagem do usuário corresponde a alguma categoria da lista de categorias em português ou inglês. Caso não seja, retorne a categoria do livro encontrado.
            - Realizar a busca por title, authors, categories e longDescription.
            - Retornar sempre o primeiro autor da lista de authors.
            - Instruções de formato de saída para JSON: { title: string, authors: string, categories: string, longDescription: string }.
            - Retornar todas as informações em inglês.
          `,
        },
        {
          role: 'user',
          content: input,
        },
      ],
      response_format: {
        type: 'json_object',
      },
      model: 'gpt-3.5-turbo-1106',
    });
    console.log('searchOpenAI');
    const output = JSON.parse(
      response.choices[0].message.content as string
    ) as GptResponse;
    return output;
  } catch (error: any) {
    if (error.status === 429) {
      return {
        title: input,
        authors: '',
        categories: '',
        longDescription: input,
      };
    }
    throw new HttpException(500, error.message);
  }
}

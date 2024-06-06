import { BookEntity } from '../../domain/entity/book.entity';
import { generateEmbeddings } from '../../infra/services/openai/generate_embeddings';
import { GptResponse, searchOpenAI } from '../../infra/services/openai/search';
import { BookDto } from '../dto/book.dto';
import { BooksRepository } from '../repository/books.repository';

class BooksUseCases {
  private booksRepository: BooksRepository;

  constructor(booksRepository: BooksRepository) {
    this.booksRepository = booksRepository;
  }

  async createBook(dto: BookDto): Promise<BookEntity> {
    const dataEmbedding = {
      title: dto.title,
      categories: dto.categories,
      authors: dto.authors,
      longDescription: dto.longDescription,
    };
    const generatedEmbeddings = await generateEmbeddings(
      JSON.stringify(dataEmbedding)
    );
    return await this.booksRepository.create({
      ...dto,
      embeddings: generatedEmbeddings,
    });
  }

  async searchBooks(search: string): Promise<BookEntity[] | null> {
    const generatedEmbeddings = await generateEmbeddings(search);
    const searchResponse = await searchOpenAI(search);
    const matchedBooks = this.matchedBooks(searchResponse);
    return await this.booksRepository.find(
      search,
      generatedEmbeddings,
      matchedBooks
    );
  }

  async updateBook(id: string, dto: BookDto): Promise<BookEntity | null> {
    const dataEmbedding = {
      title: dto.title,
      categories: dto.categories,
      authors: dto.authors,
      longDescription: dto.longDescription,
    };
    const generatedEmbeddings = await generateEmbeddings(
      JSON.stringify(dataEmbedding)
    );
    return await this.booksRepository.update(id, {
      ...dto,
      embeddings: generatedEmbeddings,
    });
  }

  private matchedBooks(search: GptResponse): Record<string, any> {
    const matches = { $match: {} };
    if (search.title) {
      matches.$match = {
        title: search.title,
      };
    }
    if (search.authors) {
      matches.$match = {
        authors: search.authors,
      };
    }
    if (search.categories) {
      matches.$match = {
        categories: search.categories,
      };
    }
    if (search.longDescription) {
      matches.$match = {
        longDescription: search.longDescription,
      };
    }
    return matches;
  }
}

export { BooksUseCases };

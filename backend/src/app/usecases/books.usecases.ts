import { BookEntity } from '../../domain/entity/book.entity';
import { BookDto } from '../dto/book.dto';
import { BooksRepository } from '../repository/books.repository';

class BooksUseCases {
  private booksRepository: BooksRepository;

  constructor(booksRepository: BooksRepository) {
    this.booksRepository = booksRepository;
  }

  async createBook(dto: BookDto): Promise<BookEntity> {
    return await this.booksRepository.create(dto);
  }

  async findBook(dto: BookDto): Promise<BookEntity | null> {
    return await this.booksRepository.find(dto);
  }

  async updateBook(id: string, dto: BookDto): Promise<BookEntity | null> {
    return await this.booksRepository.update(id, dto);
  }
}

export { BooksUseCases };

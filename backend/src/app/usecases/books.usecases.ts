import { BookDto } from '../dto/book.dto';
import { BooksRepository } from '../repository/books.repository';

class BooksUseCases {
  private booksRepository: BooksRepository;

  constructor(booksRepository: BooksRepository) {
    this.booksRepository = booksRepository;
  }

  async createBook(dto: BookDto) {
    this.booksRepository.create(dto);
  }
}

export { BooksUseCases };

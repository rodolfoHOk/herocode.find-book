import { BookDto } from '../dto/book.dto';

abstract class BooksRepository {
  abstract create(dto: BookDto): void;
}

export { BooksRepository };

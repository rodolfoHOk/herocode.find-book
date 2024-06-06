import { BookEntity } from '../../domain/entity/book.entity';
import { BookDto } from '../dto/book.dto';

abstract class BooksRepository {
  abstract create(dto: BookDto): Promise<BookEntity>;

  abstract find(dto: BookDto): Promise<BookEntity | null>;

  abstract update(dto: BookDto, id: string): Promise<BookEntity | null>;
}

export { BooksRepository };

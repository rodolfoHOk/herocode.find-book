import { BookEntity } from '../../domain/entity/book.entity';
import { BookDto } from '../dto/book.dto';

abstract class BooksRepository {
  abstract create(dto: BookDto): Promise<BookEntity>;

  abstract find(
    search: string,
    embeddings: number[],
    matches: Record<string, any>
  ): Promise<BookEntity[] | null>;

  abstract update(id: string, dto: BookDto): Promise<BookEntity | null>;
}

export { BooksRepository };

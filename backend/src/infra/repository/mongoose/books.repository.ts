import mongoose from 'mongoose';
import { BookDto } from '../../../app/dto/book.dto';
import { BooksRepository } from '../../../app/repository/books.repository';
import { BookEntity } from '../../../domain/entity/book.entity';

const booksSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  pageCount: Number,
  publishedDate: { $date: String },
  thumbnailUrl: String,
  shortDescription: String,
  longDescription: String,
  status: String,
  authors: [String],
  categories: [String],
});

const Books = mongoose.model('books', booksSchema);

class BooksMongooseRepository implements BooksRepository {
  async create(dto: BookDto): Promise<BookEntity> {
    const books = new Books(dto);
    const result = await books.save();
    return result.toObject();
  }

  async find(dto: BookDto): Promise<BookEntity | null> {
    const result = await Books.findOne({ title: dto.title });
    return result ? result.toObject() : null;
  }

  async update(dto: BookDto, id: string): Promise<BookEntity | null> {
    const result = await Books.findByIdAndUpdate(id, dto);
    return result ? result.toObject() : null;
  }
}

export { BooksMongooseRepository };

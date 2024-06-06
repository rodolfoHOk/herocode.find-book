import mongoose from 'mongoose';
import { BookDto } from '../../app/dto/book.dto';
import { BooksRepository } from '../../app/repository/books.repository';

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
  create(dto: BookDto) {
    const books = new Books(dto);
    return books.save();
  }
}

export { BooksMongooseRepository };

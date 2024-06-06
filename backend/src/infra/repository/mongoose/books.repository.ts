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
  embeddings: [Number],
});

const Books = mongoose.model('books', booksSchema);

class BooksMongooseRepository implements BooksRepository {
  async create(dto: BookDto): Promise<BookEntity> {
    const books = new Books(dto);
    const result = await books.save();
    return result.toObject();
  }

  async find(
    search: string,
    embeddings: number[],
    matches: any
  ): Promise<BookEntity[] | null> {
    if (embeddings.length > 0) {
      const result = await Books.aggregate([
        {
          $vectorSearch: {
            index: 'embeddings',
            limit: 10,
            numCandidates: 20,
            queryVector: embeddings,
            path: 'embeddings',
          },
        },
        {
          $match: {
            $or: [
              { title: new RegExp(matches.title, 'i') },
              { authors: new RegExp(matches.authors, 'i') },
              { categories: new RegExp(matches.categories, 'i') },
              { longDescription: new RegExp(matches.longDescription, 'i') },
            ],
          },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            isbn: 1,
            pageCount: 1,
            publishedDate: 1,
            thumbnailUrl: 1,
            shortDescription: 1,
            longDescription: 1,
            status: 1,
            authors: 1,
            categories: 1,
            score: { $meta: 'vectorSearchScore' },
          },
        },
      ]);
      return result;
    } else {
      const result = await Books.aggregate([
        {
          $match: {
            $or: [
              { title: new RegExp(matches.title, 'i') },
              { authors: new RegExp(matches.authors, 'i') },
              { categories: new RegExp(matches.categories, 'i') },
              { longDescription: new RegExp(matches.longDescription, 'i') },
            ],
          },
        },
        {
          $project: {
            _id: 1,
            title: 1,
            isbn: 1,
            pageCount: 1,
            publishedDate: 1,
            thumbnailUrl: 1,
            shortDescription: 1,
            longDescription: 1,
            status: 1,
            authors: 1,
            categories: 1,
            score: { $meta: 'vectorSearchScore' },
          },
        },
      ]);
      return result;
    }
  }

  async update(id: string, dto: BookDto): Promise<BookEntity | null> {
    const result = await Books.findByIdAndUpdate(id, dto);
    return result ? result.toObject() : null;
  }
}

export { BooksMongooseRepository };

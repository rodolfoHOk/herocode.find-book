import { HttpRequest, HttpResponse } from '../../infra/http/http.adapter';
import { BookDto } from '../dto/book.dto';
import { BooksUseCases } from '../usecases/books.usecases';

class BooksController {
  constructor(private readonly booksUseCases: BooksUseCases) {
    this.booksUseCases = booksUseCases;
  }

  async create(request: HttpRequest): Promise<HttpResponse> {
    try {
      const book: BookDto = request.body;
      if (!book) {
        return { status: 400, message: 'Missing body' };
      }

      const response = await this.booksUseCases.createBook(book);

      return { status: 201, message: 'Book created', data: response };
    } catch (error: any) {
      return { status: 400, message: error.message };
    }
  }
}

export { BooksController };

import { HttpRequest, HttpResponse } from '../../infra/http/http.adapter';
import { BookDto } from '../dto/book.dto';

class BooksController {
  constructor() {}

  async create(request: HttpRequest): Promise<HttpResponse> {
    try {
      const book: BookDto = request.body;
      if (!book) {
        return { status: 400, message: 'Missing body' };
      }
      return { status: 201, message: 'Book created' };
    } catch (error: any) {
      return { status: 400, message: error.message };
    }
  }
}

export { BooksController };

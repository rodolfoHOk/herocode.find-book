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

  async find(request: HttpRequest): Promise<HttpResponse> {
    try {
      const queryParams: BookDto = request.query;
      const response = await this.booksUseCases.findBook(queryParams);
      if (!response) {
        return { status: 404, message: 'Book not found' };
      }
      return { status: 200, message: 'Book found', data: response };
    } catch (error: any) {
      return { status: 400, message: error.message };
    }
  }

  async update(request: HttpRequest): Promise<HttpResponse> {
    try {
      const id: string = request.params.id;
      if (!id) {
        return { status: 400, message: 'Missing param id' };
      }
      const book: BookDto = request.body;
      if (!book) {
        return { status: 400, message: 'Missing body' };
      }
      const response = await this.booksUseCases.updateBook(id, book);
      if (!response) {
        return { status: 404, message: 'Book not found' };
      }
      return { status: 200, message: 'Book updated', data: response };
    } catch (error: any) {
      return { status: 400, message: error.message };
    }
  }
}

export { BooksController };

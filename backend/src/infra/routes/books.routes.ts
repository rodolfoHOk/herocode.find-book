import { Router } from 'express';
import { BooksController } from '../../app/controllers/books.controller';
import { routerAdapter } from './router.adapter';
import { BooksUseCases } from '../../app/usecases/books.usecases';
import { BooksMongooseRepository } from '../repository/mongoose/books.repository';

export const bookRoutes = (router: Router) => {
  const booksUseCases = new BooksUseCases(new BooksMongooseRepository());
  const booksController = new BooksController(booksUseCases);

  router.post('/books', routerAdapter(booksController, 'create'));
  router.get('/books', routerAdapter(booksController, 'find'));
  router.put('/books/:id', routerAdapter(booksController, 'update'));
};

import { Router } from 'express';
import { BooksController } from '../../app/controllers/books.controller';
import { routerAdapter } from './router.adapter';

export const bookRoutes = (router: Router) => {
  const booksController = new BooksController();
  
  router.post('/books', routerAdapter(booksController, 'create'));
};

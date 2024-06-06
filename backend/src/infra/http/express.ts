import express, { Application } from 'express';
import cors from 'cors';
import { bookRoutes } from '../routes/books.routes';
import { dbConnect } from '../database/mongoose';
import dotenv from 'dotenv';

dotenv.config();

class Express {
  app: Application;

  constructor() {
    this.app = express();
    this.initMiddlewares();
    bookRoutes(this.app);
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  listen() {
    this.app.listen(3333, () => {
      dbConnect();
      console.log('Server is running on port 3333');
    });
  }
}

export { Express };

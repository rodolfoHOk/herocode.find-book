import express, { Application } from 'express';
import cors from 'cors';

class App {
  app: Application;

  constructor() {
    this.app = express();
  }

  initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  listen() {
    this.app.listen(3333, () => console.log('Server is running on port 3333'));
  }
}

export default App;
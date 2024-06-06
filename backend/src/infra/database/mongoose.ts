import mongoose from 'mongoose';
import { HttpException } from '../../types/HttpException';

export async function dbConnect() {
  try {
    if (!process.env.DATABASE_URL)
      throw new HttpException(500, 'Missing database URL');
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('Database connected');
  } catch (error: any) {
    throw new HttpException(500, error.message);
  }
}

import mongoose from 'mongoose';

export async function connectDB(uri, dbName) {
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, { dbName });
  console.log('✅ MongoDB connected:', dbName);
}
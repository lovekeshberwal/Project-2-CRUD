import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    price: { type: Number, min: 0, default: 0 },
    category: { type: String, index: true },
    imageUrl: { type: String, default: '' },
    inStock: { type: Boolean, default: true },
    rating: { type: Number, min: 0, max: 5, default: 0 }
  },
  { timestamps: true }
);

ItemSchema.index({ title: 'text', description: 'text', category: 'text' });

export default mongoose.model('Item', ItemSchema);
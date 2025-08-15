import 'dotenv/config';
import { connectDB } from '../db/connect.js';
import Item from '../models/Item.js';

const categories = ['Tech', 'Art', 'Fashion', 'Home', 'Sports'];

function randomItem(i) {
  return {
    title: `Showcase Item ${i + 1}`,
    description: `This is a beautifully crafted item number ${i + 1} with premium features and delightful details.`,
    price: +(Math.random() * 200 + 10).toFixed(2),
    category: categories[i % categories.length],
    imageUrl: `https://picsum.photos/seed/item${i}/600/400`,
    inStock: Math.random() > 0.15,
    rating: +(Math.random() * 5).toFixed(1)
  };
}

async function run() {
  await connectDB(process.env.MONGODB_URI, process.env.DB_NAME);
  await Item.deleteMany({});
  const items = Array.from({ length: 24 }, (_, i) => randomItem(i));
  await Item.insertMany(items);
  console.log(`✅ Seeded ${items.length} items`);
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
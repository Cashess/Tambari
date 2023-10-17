import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [];

  for (let i = 1; i <= 20; i++) {
    const product = await prisma.product.create({
      data: {
        title: `Product ${i}`,
        description: `Description of Product ${i}`,
        price: Math.floor(Math.random() * 100) + 1, // Generate a random price between 1 and 100
        imageURL: `https://example.com/image-${i}.jpg`, // Replace with your image URL generation logic
      },
    });

    products.push(product);
  }

  console.log('Seeding completed successfully.', products);
}

main()
  .catch((error) => {
    console.error('Error seeding database:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
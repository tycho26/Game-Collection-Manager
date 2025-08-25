// seed_genres.js
const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function seeder() {
  // Define some genres
  const genresData = [
    { name: "RPG", media_type_id: "32dfc154-7ede-11f0-a843-36af1bbd29c4" },
    { name: "JRPG", media_type_id: "32dfc154-7ede-11f0-a843-36af1bbd29c4" },
    {
      name: "2D Platformer",
      media_type_id: "32dfc154-7ede-11f0-a843-36af1bbd29c4",
    },
    {
      name: "3D Platformer",
      media_type_id: "32dfc154-7ede-11f0-a843-36af1bbd29c4",
    },
    { name: "Racing", media_type_id: "32dfc154-7ede-11f0-a843-36af1bbd29c4" },
    { name: "Horror", media_type_id: "32dfc154-7ede-11f0-a843-36af1bbd29c4" },
  ];

  // Create genres in the database
  const createdGenres = await prisma.genres.createMany({
    data: genresData,
  });
}
seeder()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

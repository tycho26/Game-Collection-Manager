"use server";

import { PrismaClient } from "../generated/prisma";

export async function getGameGenres() {
  const prisma = new PrismaClient();
  const genres = await prisma.genres.findMany();
  console.log(genres);
  return genres;
}

export async function createGame(formData) {
  // const gameTitle = formData.get("gameTitle")
  // const gameRelease = new Date(formData.get("gameRelease"))
  // const gameDev = formData.get("gameDev")
  // const gamePub = formData.get("gamePub")
  // const gameRating = Number(formData.get("gameRating"))
  const { gameTitle, gameRelease, gameDev, gamePub, gameRating } = formData;
  const prisma = new PrismaClient();
  await prisma.games.create({
    data: {
      title: gameTitle,
      release_date: gameRelease,
      publisher: gamePub,
      developer: gameDev,
      rating: gameRating,
    },
  });
}

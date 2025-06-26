import GameCard from "@/components/ui/gameCard";
import Image from "next/image";
const { PrismaClient } = require("../../generated/prisma")

export default async function Home() {

  const prisma = new PrismaClient()

  let games = await prisma.games.findMany()
  let gameList = games.map(game => <GameCard key={game.game_id} gameInfo={game}></GameCard>)

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 m-5 justify-center gap-4">

      {gameList}
  
    </div>
  );
}

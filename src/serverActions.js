'use server'

import { PrismaClient } from "../generated/prisma";

export async function createGame(formData){
    await console.log(formData)
    const gameTitle = formData.get("gameTitle")
    const gameRelease = new Date(formData.get("gameRelease"))
    const gameDev = formData.get("gameDev")
    const gamePub = formData.get("gamePub")
    const gameRating = Number(formData.get("gameRating"))
    console.log(gameTitle)
    const prisma = new PrismaClient
    await prisma.games.create({
        data:{
            title:gameTitle,
            release_date:gameRelease,
            publisher:gamePub,
            developer:gameDev,
            rating:gameRating
        }
    })
}
import * as zod from "zod/v4"

export function validateGame(gameData){

    const GameSchema = zod.object({
            gameTitle: zod.string().min(1,"Cannot be empty!"),
            gameRelease: zod.date(),
            gameDev: zod.string(),
            gamePub: zod.string(),
            gameRating: zod.number().lte(5).optional()
        })

    const valResults = GameSchema.safeParse(gameData)
    console.log(gameData)
    console.log(valResults)
    let validateReport = {
        success:undefined
    };
    if (!valResults.success){
        validateReport.success = false;
        validateReport.errors = zod.treeifyError(valResults.error)
    }
    else{
        validateReport.success = true;
    }

    return validateReport;
}
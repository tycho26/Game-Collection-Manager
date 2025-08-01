'use client'

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/ui/card"
import { Input } from "@/components/shadcn/ui/input"
import { Label } from "@/components/shadcn/ui/label"
import { Button } from "@/components/shadcn/ui/button"
import { createGame } from "@/serverActions"
import { validateGame } from "@/validators/gameValidator"


export default function GameCreate(){

    
    let formErrorsUI = {
        gameTitle: "",
        gameRelease: "",
        gameDev: "",
        gamePub: "",
        gameRating: "",
    }

    const submitForm = function(formData){
        let data = Object.fromEntries(formData.entries())
        data.gameRelease = new Date(data.gameRelease)
        data.gameRating = Number(data.gameRating)
        
        
            // - [x] zod errors parsen en in const doen
			// - [x] treeify'en
			// - [x] object maken met field name als key, en (eerste) error als value
			// - [ ] maak labels in HTML form voor errors voor velden
			// - [ ] assign value aan labels
			// - [ ] if no errors, run create game server availableactionalue aan labels
			// - [ ] if no errors, run create game server action
            console.log(data)
            const valReport = validateGame(data)
            console.log(valReport)
            if(!valReport.success){
                Object.keys(valReport.errors.properties).forEach(key => formErrorsUI[key] = valReport.errors.properties[key].errors[0])
                console.log(formErrorsUI)
            }
            else{
                console.log("No validation errors!")
                createGame(data);
            }


        }

    return(
        <div className="grid grid-cols-1 md:grid-cols-6 mt-5 md:mt-20 justify-center">
            <Card className="md:col-start-3 md:col-span-2">
                <CardHeader>
                    <CardTitle>Add game</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={submitForm}>
                        <div className="md:inline-flex md:gap-2">
                            <span>{formErrorsUI.gameTitle}</span>
                            <Input className="grow" type="text" name="gameTitle" placeholder="Title"></Input>
                            <span className="m-1 md:m-0">
                                <Input type="date" required name="gameRelease" placeholder="Release date"></Input>
                            </span>
                        </div>
                        <div className="mt-3parse md:inline-flex md:gap-2">
                            <Input className="grow" type="text" name="gameDev" placeholder="Developer"></Input>
                            <Input className="grow" type="text" name="gamePub" placeholder="Publisher"></Input>
                        </div>
                        <Input className="grow mt-3" name="gameRating" type="number" max="5" placeholder="Rating"></Input>
                        <Button className="mt-3">Create</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
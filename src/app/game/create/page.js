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
import { useActionState, useState } from "react"
import { success } from "zod/v4"


export default function GameCreate(){

    const submitForm = function(currentState, formData){
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
            let valSummary = {
                success:true
            }
            if(!valReport.success){
                valSummary.success = false
                Object.keys(valReport.errors.properties).forEach(key => valSummary[key] = valReport.errors.properties[key].errors[0])
                console.log(valSummary)
                return valSummary
            }
            else{
                console.log("No validation errors!")
                createGame(data);
                return valSummary
            }


        }

    const [formState, formAction, isPending] = useActionState(submitForm,{})

    return(
        <div className="grid grid-cols-1 md:grid-cols-6 mt-5 md:mt-20 justify-center">
            <Card className="md:col-start-3 md:col-span-2">
                <CardHeader>
                    <CardTitle>Add game</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction}>
                        <div className="md:inline-flex md:gap-2">
                            <div className="flex flex-col">
                                <span>{formState.gameTitle}</span>
                                <Input className="grow" type="text" name="gameTitle" placeholder="Title"></Input>
                            </div>
                            <span className="m-1 md:m-0">
                                <div className="flex flex-col">
                                    <span>{formState.gameRelease}</span>
                                    <Input type="date" required name="gameRelease" placeholder="Release date"></Input>
                                </div>
                            </span>
                        </div>
                        <div className="mt-3parse md:inline-flex md:gap-2">
                            <div className="flex flex-col">
                                <span>{formState.gameDev}</span>
                                <Input className="grow" type="text" name="gameDev" placeholder="Developer"></Input>
                            </div>
                            <div className="flex flex-col">
                                <span>{formState.gamePub}</span>
                                <Input className="grow" type="text" name="gamePub" placeholder="Publisher"></Input>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span>{formState.gameRating}</span>
                            <Input className="grow mt-3" name="gameRating" type="number" max="5" placeholder="Rating"></Input>
                        </div>
                        <Button className="mt-3" disabled={isPending}>Create</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
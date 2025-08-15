import * as React from "react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/ui/card"
import { Badge } from "@/components/shadcn/ui/badge"
import Image from "next/image";

function GameCard(props) {

    // console.log(props)
    const {
        title,
        release_date
    } = props.gameInfo;

    return (
        <Card className="w-full max-w-sm">
            <CardContent>
                <Image width="200" height="200" src="/window.svg"></Image>
            </CardContent>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>Released: {release_date.toLocaleDateString("nl-NL")}</CardDescription>
                <CardDescription className="flex overflow-hidden gap-0.5">
                    <Badge variant="default">RPG</Badge>
                    <Badge variant="default">RPG</Badge>
                    <Badge variant="default">RPG</Badge>
                    <Badge variant="default">RPG</Badge>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default GameCard
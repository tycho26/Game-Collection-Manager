import { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Chip, Badge, Typography, CardMedia } from '@mui/material'

function GameGridCard(itemData) {

    console.log(itemData.itemData.gameTitle)

    return (
        <Card color="secondary">
            <CardMedia
                sx={{ height: 300 }}
                image='https://placehold.co/400x600?text=Cover+image'
            />
            <CardContent>
                <Typography variant='h4'>{itemData.itemData.gameTitle}</Typography>
                <Chip label="Platform #1" color='secondary' />
                <Chip label="Platform #2" color='secondary' />
                <Chip label="Platform #3" color='secondary' />
                <Chip label="Platform #4" color='secondary' />
            </CardContent>
        </Card>
    )
}

export default GameGridCard
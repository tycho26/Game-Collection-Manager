import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SETTINGS from './Settings.mjs'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import GameCardGrid from './components/game-grid-card'

function App() {
  const [res, setRes] = useState([])

  useEffect(() => {
    let res = fetch(`http://${SETTINGS['Server IP']}:${SETTINGS['Server port']}/games`).then((r) => { return r.json() }).then((t) => { setRes(t) })

  },[])

  console.log(res)

  const itemList = res.map(item =>
    <Grid key={item.gameID} size={5}>
      <GameCardGrid itemData={item}/>
    </Grid>
   )

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
       {itemList}
      </Grid>
    </Container>
  )
}

export default App

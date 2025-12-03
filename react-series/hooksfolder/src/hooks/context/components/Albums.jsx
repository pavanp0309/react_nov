import React from 'react'
import Player from './Player'
import { useData } from './store/Store'


const Albums = (props) => {
   const {play,setPlay}=useData()
 
    console.log("albums rendering..")
  return (
    <div>
      <Player />
    </div>
  )
}

export default Albums

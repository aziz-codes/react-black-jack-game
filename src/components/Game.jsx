import React from 'react'
import {useParams} from 'react-router-dom';
const Game = () => {
const {name} = useParams();
  return (
    <div>{name}</div>
  )
}

export default Game
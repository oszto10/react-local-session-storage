import React from 'react'

function Beer({name, id, favorites, setFavorites}) {
  return (
    <div>
        <h2>{name}</h2>
        <h3>{id}</h3>
        <button onClick={()=> {
            setFavorites([...favorites, id])
        }}>Add to favorite</button>
    </div>
  )
}

export default Beer
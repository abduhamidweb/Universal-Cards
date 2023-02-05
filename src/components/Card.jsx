import React from 'react'
import './card.css'
import { useSelector, useDispatch } from 'react-redux'
import { likes } from '../feautures/cardSlice'
const Card = () => {
    const {like} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  function handlerLike() {
    dispatch(likes())
  }
  return (
    <>
      <div className='card__wrapper'>
        <div className='card' onClick={handlerLike}>
          {like ? (
            <i class='bi bi-heart-fill'></i>
          ) : (
            <i class='bi bi-heart'></i>
          )}
        </div>
      </div>
    </>
  )
}

export default Card

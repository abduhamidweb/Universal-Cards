import React from 'react'
import './card.css'
import { useSelector, useDispatch } from 'react-redux'
import { likes, i12, i22, i32, i42, i52 } from '../feautures/cardSlice'
const Card = () => {
  const { like, i1, i2, i3, i4, i5 } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  function handlerLike() {
    dispatch(likes())
  }
  return (
    <>
      <div className='card__wrapper'>
        <div className='card '>
          <span
            onClick={() => {
              dispatch(i12())
            }}
          >
            🤤
          </span>
          <span>{i1}</span>
          <span
            onClick={() => {
              dispatch(i22())
            }}
          >
            😎
          </span>
          <span>{i2}</span>
          <span
            onClick={() => {
              dispatch(i32())
            }}
          >
            🙏
          </span>
          <span>{i3}</span>
          <span
            onClick={() => {
              dispatch(i42())
            }}
          >
            😱
          </span>
          <span>{i4}</span>
          <span
            onClick={() => {
              dispatch(i52())
            }}
          >
            🥳
          </span>
          <span>{i5}</span>
        </div>
      </div>
    </>
  )
}

export default Card

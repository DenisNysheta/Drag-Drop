"use client"
import React from 'react'
import { useSelector } from 'react-redux'

type Props = {
    icon: React.ReactNode,
    text: string
}

function Card({icon, text}: Props) {

    const stateList = useSelector((state: any) => state.dropList.listCards)
    console.log(stateList)

  return (
    <li onDragStart={(e) => dragStartHandler(e, card)} onDragEnd={(e) => dragEndHandler(e)} onDragLeave={(e) => dragEndHandler(e)} onDragOver={(e) => dragOverHandler(e)} onDrop={(e) => dropHandler(e, card)} draggable={true} className='list-cards__card'>
        <div>
            {icon}
        </div>
        <p>
            {text}
        </p>
    </li>
  )
}

export default Card
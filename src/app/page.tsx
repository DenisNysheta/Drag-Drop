"use client"
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  
  const [widthWindow, setWidthWindow] = useState(0)

  const [activeMenu, setActiveMenu] = useState(false)

  const [textCard, setTextCard] = useState("")


  // Redux Store
  const listCards = useSelector((state: any) => state.dropList.listCards)
  // Component Store

  
  const [listCardsComponent, setListCardsComponent] = useState([...listCards])
  const [currentCard, setCurrentCard] = useState(null)
  
  // <----Drag and Drop functions---->
  function dragStartHandler(e: any, card: any) {
    setCurrentCard(card)
  } 
  
  function dragEndHandler(e: any) {
  }
  
  function dragOverHandler(e: any) {
    e.preventDefault()
  }
  
  function dropHandler(e: any, card: any) {
    e.preventDefault()
    setListCardsComponent(listCardsComponent.map((c: any) => {
      if(c.id === card.id) {
        return {...c, text: currentCard.text, icon: currentCard.icon}
      }
      
      if(c.id === currentCard.id) {
        return {...c, text: card.text, icon: card.icon}
      }
      
      return c
    }))
    setTextCard(currentCard.text)
  }
  
  function sortCards(a: any,b: any) {
    if(a.id > b.id) {
      return 1
    } else {
      return -1
    }
  }
  // <----Drag and Drop functions---->

  useEffect(() => {
    const handleResize = () => {
      setWidthWindow(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [widthWindow]);

  console.log(widthWindow)


  localStorage.setItem("listCards", JSON.stringify(listCardsComponent))

  return ( 
    <>
      <div className="wrapper">
        <ul className="list-cards">
          {listCardsComponent.sort(sortCards).map((card: any) => {
            return (<li onClick={() => {

            }} key={card.id} onDragStart={(e) => dragStartHandler(e, card)} onDragEnd={(e) => dragEndHandler(e)} onDragLeave={(e) => dragEndHandler(e)} onDragOver={(e) => dragOverHandler(e)} onDrop={(e) => dropHandler(e, card)} draggable={true} className='list-cards__card'>
            <div>
                {card.icon}
            </div> 
            <p>
                {card.text}
            </p>
        </li>)
          })}
          <li onClick={(e) => {
            e.currentTarget.classList.toggle("active-btn")
            setActiveMenu(!activeMenu)
          }} className="drop-down-menu">
          </li>          
        </ul>
        <div className="box">
          <div style={{opacity: activeMenu ? 1 : 0}} className="menu-list-cards"></div>
          <p>{textCard}</p>
        </div>
      </div>
    </>
  );
}
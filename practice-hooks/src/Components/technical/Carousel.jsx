import React, { useEffect, useState } from 'react';

const items =[
    {
        id:1,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9rOEZ_ewRp7KiUniY6fwecsDoqqNl8JLvYj2iD3xhQ&s",
        title:"image 1"
    },
    {
        id:2,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9rOEZ_ewRp7KiUniY6fwecsDoqqNl8JLvYj2iD3xhQ&s",
        title:"image 2"
    },
    {
        id:3,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9rOEZ_ewRp7KiUniY6fwecsDoqqNl8JLvYj2iD3xhQ&s",
        title:"image 3"
    }
]

const Carousel = () => {
    const [Active,setActive] = useState(0);

    const handleNextBtn = () =>{
        if(Active===items.length-1){
            setActive(0)
        }
        else{
            setActive(Active+1);
        }
    }

    const handlePrevBtn = () =>{
        if(Active===0){
            setActive(items.length-1)
        }
        else{

            setActive(Active-1)
        }
    }
    useEffect(()=>{
        const timer = setTimeout(() => {
            handleNextBtn();
        }, 1500);
        return ()=> clearTimeout(timer);
    },[Active])

  return (
    <div>
        <img 
        src={items[Active].imageUrl}
        alt = {items[Active].title}
        width={200}
        height={200}
        />    
        <h1>{items[Active].title}</h1>
        <button type="button" onClick={handleNextBtn}>Next</button> 
        <button type="button" onClick={handlePrevBtn} >Perivous</button> 
    </div>
  )
}

export default Carousel
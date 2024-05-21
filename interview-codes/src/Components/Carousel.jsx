import React, { useEffect, useState } from 'react';
const itmes =[
    {
        id:1,
        imgUrl:"https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?cs=srgb&dl=pexels-sevenstormphotography-381739.jpg&fm=jpg",
        title:"image-1"
    },
    {
        id:2,
        imgUrl:"https://static.toiimg.com/photo/msid-101699570,width-96,height-65.cms",
        title:"image-2"
    },
    {
        id:3,
        imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6FVmVoNoFQ-C2xYYc8jA8cLigZGNtha9gxJV8QCU1FIkmxzotlTS8PItYJiIf-cAgfA&usqp=CAU",
        title:"image-3"
    }
]

const Carousel = () => {
    const [ActiveItem,setActiveItem] = useState(0);

    const handleNextBtn = () =>{
        if(ActiveItem===itmes.length-1){
            setActiveItem(0);
        }
        else{

            setActiveItem((ActiveItem)=> ActiveItem+1);
        }
    }

    const handlePrevBtn = ()=>{
        if(ActiveItem===0){
            setActiveItem(itmes.length-1);
        }
        else{
            setActiveItem((ActiveItem)=> ActiveItem-1)
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
           handleNextBtn();
        },1500)
        return ()=> clearTimeout(timer);
    })

    // console.log(ActiveItem);
  return (
    <div>
        <h2>Carousel</h2>
        <img
            src={itmes[ActiveItem].imgUrl}
            alt={itmes[ActiveItem].title}
            width={300}
            height={300}
        />
        <h3>{itmes[ActiveItem].title}</h3>
        <button type="button" onClick={handlePrevBtn}>Previous</button>
        <button type="button" onClick={handleNextBtn}>Next</button>
    </div>
  )
}

export default Carousel
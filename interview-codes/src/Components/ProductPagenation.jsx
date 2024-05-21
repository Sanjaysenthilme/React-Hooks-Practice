import React from 'react'

const ProductPagenation = ({products,total,pages,setPages}) => {

    const handlePagenation = (selectpage) =>{
        if(selectpage>=1 && selectpage <=total/10){
            setPages(selectpage)
        }
    }
  return (
    <>
    
    <div style={{display: "flex",justifyContent:"center"}}>
            <span style={{color:"deeppink",fontSize:'25px'}} onClick={()=> handlePagenation(pages-1)} >←</span>
                {[...Array(total/10)].map((_,index)=> ( 
                    <span key={index} style={{padding:"5px "}} onClick={()=> handlePagenation(index+1)}>{index+1}</span>
                ))}
            <span style={{color:"deeppink",fontSize:'25px'}} onClick={()=> handlePagenation(pages+1)}>→</span>
    </div>
</>
  )
}

export default ProductPagenation
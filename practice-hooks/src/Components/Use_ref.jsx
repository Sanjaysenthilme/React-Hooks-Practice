import React, { useEffect, useRef } from 'react'

const Use_ref = () => {
    const inputE1 = useRef('null');

    const focusInput = () =>{
        inputE1.current.focus();
    }
    useEffect(()=>{
        focusInput();
    },[])
  return (
    <div>
        <input type="text" ref={inputE1} />
        <button type="button" onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default Use_ref
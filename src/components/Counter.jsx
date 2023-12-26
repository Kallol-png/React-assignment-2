import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);
    const handleIncrement =()=>{
          setCount(count+1);
    }
    const handleDecrement =()=>{
          setCount(count-1);
    }
    const reset =()=>{
        setCount(0)
    }
    
  return (
    
    <div className='counter center'>
    <h1 className='counter_title'>Counter App</h1>
    <div className='card center'>
        <h2 className='card_title'>Count : {count}</h2>
    
     <div className='card_btns'>
        <button onClick={handleIncrement} disabled={count===5?true:false} className='btn card_btn'>+</button>
        <button onClick={handleDecrement} disabled={count===-5?true:false} className='btn card_btn'>-</button>
        <button onClick={reset} className='btn card_btn'>0</button>
     </div>
    </div>
      
    </div>
  )
}

export default Counter

import React from 'react'
import { useState } from 'react'

const QueueVisualizer = () => {

    const [queue , setQueue] = useState([]);
    const [inputValue , setInputValue] = useState('');
    const MAX_SIZE = 7;


  return (
    <>
    <div>QueueVisualizer</div>

    <div style={{ display:'flex' , alignItems:'center' , minHeight:'80px'}}>
        {queue.map((value , index) => (
            <div
            key={index}
            style={{
                width: '60px',
                height: '40px',
                margin: '5px',
                backgroundColor: index === 0 ? 'orange' : 'lightblue' ,
                textAlign: 'center',
                lineHeight: '40px',
                position: 'relative',
            }}
            
            > {value} 
               {/* Pointers */}
               { index === 0 && (
                <div style={{ position:'absolute' , top:'-20px' , left: '5px' , fontSize:'12px' ,color:'red'}}>
                    ← front 
                    </div>
               )}
               </div>
        ))}

    </div>
    
    <input 
    type='number'
    value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)}/>
    
    <button className='Enqueue-btn'
    onClick={()=>{
        if (queue.length >= MAX_SIZE) return alert("Queue Overflow");
        setQueue(prev => [...prev, Number(inputValue)]);
        setInputValue('');
    }}>
       Enqueue
    </button>

    <button className='dequeueBtn'
    onClick={()=>{
        if (queue.length === 0) return alert ("Queue Underflow");
        setQueue(prev => prev.slice(1));
    }}>
     Dequeue
    </button>
    
    </>
    
  )
}

export default QueueVisualizer
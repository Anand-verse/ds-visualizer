import React from 'react'
import { useState } from 'react';

const StackVisualizer = () => {
  const [stack , setStack] = useState([]);
  const [inputValue , setInputValue] = useState('');
  const MAX_SIZE = 7;

   

   

  return (
    <div>
        <div>StackVisualizer</div>
        <div style={{display: 'flex' , flexDirection: 'column-reverse' ,alignItems:'center', height:'300px'}}>
            {stack.map((value , index) => (
                
               <div key={index} style={{ position: 'relative'}}>
                    {index === stack.length - 1 && (
                        <div style={{ position: 'absolute' , top: '-20px' ,left: '35px', fontSize: '12px', color: 'red'}}>
                         ⬆ top 
                        </div>
                    )}

               <div
                 style={{
                    width:'100px',
                    height:'40px',
                    margin:'5px',
                    backgroundColor: index === stack.length - 1? 'orange': 'lightblue',
                    textAlign:'center',
                    lineHeight: '40px',
                }}
               >

                
                    {value}
                    </div>
                    </div>

            ))}

        </div>

        <div>
            <input 
            type='number'
            value={inputValue}
            onChange={(e)=> setInputValue(e.target.value)} 
            />

            <button className='pushButton'
            onClick={()=>{
                  if (stack.length >= MAX_SIZE) {
                  alert("Stack Overflow");
                  return;
                    }

                if (inputValue !== '') {
                    setStack([...stack , Number(inputValue)]);
                    setInputValue('');
                }

               setTimeout(()=>{
                setStack(prev => [...prev , Number(inputValue)]);
                setInputValue('');
               }, 300);

            }}>
                Push
            </button>

            <button className='popButton'
            onClick={()=> {
                  if(stack.length === 0) {
                  alert("Stack Underflow");
                     return;
                    }
                
                setStack(stack.slice(0 ,-1))}}>
                POP
            </button>
        </div>

        <div style={{ marginBottom: '10px' , color: 'gray'}}>
         Top: {stack.length > 0 ? stack[stack.length - 1] : 'Empty'}
        </div>


        

    </div>
  )
}

export default StackVisualizer
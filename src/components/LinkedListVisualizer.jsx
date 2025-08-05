import React from 'react'
import { useState } from 'react';

const LinkedListVisualizer = () => {
  const [list , setList] = useState([]);
  const [inputValue , setInputValue] = useState('');



  return (
    <>
    <div style={{display:'flex' , alignItems:'center'}}>
        {list.map((value , index)=>(
            <div
             key={index}
             style={{
                diplay:'flex',
                alignItems:'center',
                margin:'0 5px',
                position:'relative'
                }}>

            {/* Head/Tail Labels */}
            {index === 0 && (
                <div style={{positon:'absolute' , top:'-20px' , left:'0' , fontSize:'12px' , color:'red'}}>
                    Head    
                </div>
              
            )}
             {index === 0 && (
                 <div style={{positon:'absolute' , top:'-20px' , left:'0' , fontSize:'12px' , color:'red'}}>
                    Tail   
                </div>
               )}


            
             


            <div
               style={{
                width: '60px',
                height: '40px',
                backgroundColor:'lightgreen',
                border:'1px solid black',
                textAlign:'center',
                lineHeight:'40px',
                transition:'all 0.3s ease'
               }} >
                {value}
            </div>

        {/* Arrow */}
        {index !== list.length - 1 && (

            <div style={{margin:'0 5px' , fontSize:'24px'}}> → </div>
               )}
            </div>
             ))}

    </div>

    <input 
    type='number'
    value={inputValue}
    onChange={(e)=>setInputValue(e.target.value)}/>

    <button
        onClick={()=>{
        setList([...list , Number(inputValue)]);
        setInputValue('');
           }}>
        Insert at Head
    </button>

    <button 
        onClick={()=>{
        setList([...list , Number(inputValue)]);
        setInputValue('');
        }}>
        Insert at Tail
    </button>

    <button
        onClick={()=>{
        if (list.length === 0) return alert("List is empty");
        setList(list.slice(1));
         }}>
        Delete Head
    </button>

    <button
         onClick={()=>{
         if (list.length === 0) return alert("List is empty");
         setList(list.slice(0,-1));
          }}>
         Delete Tail
    </button>
    
    </>
  )
}

export default LinkedListVisualizer
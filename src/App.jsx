import React from 'react';
import SortingVisualizer from './components/SortingVisualizer.jsx';
import StackVisualizer from './components/StackVisualizer.jsx'
import QueueVisualizer from './components/QueueVisualizer.jsx';
import LinkedListVisualizer from './components/LinkedListVisualizer.jsx';
import { useState } from 'react';


function App() {
 const [mode , setMode] = useState("sorting")

  return (
    <>
     <div>
      <h1>Algo - Visualizer</h1>
    
    <div className='dropDown' style={{marginBottom:'10px'}}>
        <label>Select One: </label>
        <select value={mode} onChange={(e)=>setMode(e.target.value)}>
        <option >--Select ---</option>
        <option value='sorting' > Sorting </option>
        <option value='stack'> Stack </option>
        <option value='queue'> Queue </option>
        <option value='linkedlist'> linkedList</option>
        </select>
      </div>


      {/* // conditional rendering */}
      {mode === "sorting" && <SortingVisualizer/>}
      {mode === "stack" && <StackVisualizer/>}
      {mode === "queue" && <QueueVisualizer/>}
      {mode === "linkedlist" && <LinkedListVisualizer/>}
      
      
      
     </div>
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

const SortingVisualizer = () => {
    const [array, setArray] = useState([5,2,8,1,10,9,3]);
    const [comparing ,setComparing] = useState([]);
    const [arraySize , setArraySize ] = useState(20);
    const [speed , setSpeed ] = useState(300);
    const [algorithm , setAlgorithm] = useState("bubble")


  
  
    return (

    <div style={{ alignItems: "flex-end" ,display: "flex", height: '200px' }}>
    
      {array.map((value, index) =>  {
        const isComparing = comparing.includes(index);
        
        return(
        <div
          key={index}
          style={{
            height: `${value * 10}px`,
            width: '30px',
            backgroundColor: isComparing ? "red" : "blue",
            margin: '0 5px',
          }}
        ></div>
        );
    })}        

        <div className='button '>
            <button
           onClick={() => {
            if (algorithm === "bubble"){
                bubbleSortStepByStep(array , setArray ,setComparing ,speed);
            } else if (algorithm === "merge"){
                mergeSortStepByStep(array , setArray , setComparing ,speed);
            } else if (algorithm === "insertion"){
                insertionSortStepByStep(array , setArray ,setComparing ,speed);
            } else if (algorithm === "quick"){
                quickSortStepByStep(array , setArray , setComparing , speed);
            }
           }} 
           style={{ marginTop: "20px",
                              background: "red",
                              color: "white",
                              padding: "8px 12px",
                              border: "none",
                              borderRadius: "4px"
                             }}
                             >
            Start Sorting
            </button>
        </div>

       <div className='generateRandomArray'
             style={{margin:'20px'}}>

          <button onClick={ ()=> generateRandomArray(arraySize) }>
            Generate New Array
          </button> 

        <div style={{ marginTop:'10px'}}>
            <label>Array Size :{arraySize} </label>
            <input 
            type='range'
            min='5'
            max='100'
            value={arraySize}
            onChange={(e) => {
                setArraySize(Number(e.target.value));
                generateRandomArray(Number(e.target.value));
            }}
            />
        </div>  

        <div style={{ marginTop: "10px" }}>
        <label>Speed (ms): {speed}</label>
         <input
        type="range"
        min="50"
        max="1000"
        step="50"
        value={speed}
        onChange={(e) => setSpeed(Number(e.target.value))}
         />
        </div>      

       </div>

       <div className='dropdown' style={{ marginBottom :'10px'}} >
         <label> Select Algorithm: </label>

         <select value={algorithm} onChange={(e)=>setAlgorithm(e.target.value)}>
            <option value="bubble"> Bubble Sort </option>
            <option value="merge"> Merge Sort </option>
            <option value="insertion"> Insertion Sort </option>
            <option value="quick"> Quick Sort </option>

         </select>

       </div>

    </div>
  )

   

      function bubbleSortStepByStep(arr , updateArray , updateComparing ,speed) {

 


         let animations = [] ;
         let array1 = [...arr] 

        for(let i =0 ; i< array1.length -1 ; i++){
            
            for(let j=0 ; j< array1.length -i -1 ; j++){
                animations.push({comparing:[j,j+1] , array1: [...array1]}) ;
                
                if(array1[j] > array1[j+1] ){
                    //swap
                    
                    let temp = array1[j];
                    array1[j] = array1[j+1];
                    array1[j+1] = temp ;
                    
                    //store a snapshot
                   animations.push({comparing:[j,j+1] , array1: [...array1]}) ;
                    // animations.push([...array1])

                }
            }
        }
        
        
        //Animate step by step

        animations.forEach((step , index) => {
            setTimeout(() => {
                updateComparing(step.comparing)
                updateArray(step.array1);
            }, index * speed)
        });

        }

        function generateRandomArray(size){
         const newArray =  Array.from({ length: size} , () => Math.floor(Math.random()*40)+5 );
            setArray(newArray);
        }

        function mergeSortStepByStep( arr , updateArray ,updateComparing ,speed){
         
            let animations = [];

            function mergeSort(array , left , right) {
                if(left >= right) return ;

                const mid = Math.floor((left + right)/2);
                mergeSort(array ,left , mid);
                mergeSort(array, mid + 1 , right);
                merge(array , left , mid , right);
            }

            function merge (array ,left ,mid ,right) {
                let i =left;
                let j = mid + 1 ;
                let temp = [] ;

                while (i <= mid && j <= right) {
                    animations.push({comparing: [i,j] , snapshot: [...array]}) ;
                    if (array[i] < array[j]) {
                        temp.push(array[i++]);
                    } else {
                        temp.push(array[j++]);
                    }
                }
            

            while (i <= mid) temp.push(array[i++]);
            while (j <= right) temp.push(array[j++]);

            for( let k = left ; k <= right ; k++) {
                array[k] = temp[k - left];
                animations.push({ comparing: [k] , snapshot: [...array]});
            }
        }


            let copy = [...arr] ;
            mergeSort(copy , 0 , copy.length -1  );

            animations.forEach((step , index) =>{
                setTimeout(()=>{
                    updateComparing(step.comparing);
                    updateArray(step.snapshot);
                } , index * speed);
            });


        }

        function insertionSortStepByStep(arr , updateArray , updateComparing ,speed) {
          
            let animations = [];
            const array = [...arr];

            for (let i = 0; i < array.length; i++) {
                let key = array[i];
                let j = i -1 ;

                while (j >= 0 && array[j] > key ) {
                    animations.push({comparing:[j , j+1] , snapshot: [...array]});
                    array[j+1] = array[j];
                    j--;
                }
                
                array[j+1] = key;
                animations.push({comparing: [j+1] , snapshot: [...array]});
            }

            animations.forEach((step , index) => {
                setTimeout(()=>{
                    updateComparing(step.comparing);
                    updateArray(step.snapshot);
                }, index * speed);
            });
        }
        
        function quickSortStepByStep(arr , updateArray , updateComparing , speed) {
            let animations = [] ;
            const array = [...arr];


            function quickSort(start , end) {
                if(start >= end) return;

                let pivotIndex = partition(start , end);
                quickSort(start , pivotIndex - 1);
                quickSort(pivotIndex + 1 , end);

            }

            function partition(start , end){
                let pivot = array[end];
                let i = start - 1;

                for(let j = start ; j< end ; j++) {
                    animations.push({comparing: [i,j] , snapshot: [...array]});

                    if(array[j] < pivot){
                        i++;
                        [array[i] ,array[j]] = [array[j] , array[i]];
                        animations.push({ comparing: [i,j] , snapshot: [...array]});
                    }
                }

                [array[i+1] , array[end]] = [array[end] , array[i+1]];
                animations.push({comparing: [i+1 ,end] , snapshot:[...array]});

                return i+1 ;
            }

            quickSort(0 , array.length - 1);

            animations.forEach((step , index) =>{
                setTimeout(() => {
                    updateComparing(step.comparing);
                    updateArray(step.snapshot)
                }, index * speed);
            })



        }

    

}


export default SortingVisualizer;
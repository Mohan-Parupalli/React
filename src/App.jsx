import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [colour,setColor] = useState('red');
   const [count, setCount] = useState(0);

     useEffect(() => {
    console.log("Effect:", count);
  }, []);

  function handleClick()
  {

    // setCount(count+1);
    // setCount( (prevCount) => prevCount+1);
    // setCount( (prevCount) => prevCount+1);
    // setCount(count+1);
    //  if(colour == 'red') {
    //       setColor('blue')
    //     }
    //     else{
    //       setColor('red')
    //     }
    // 
    // setColor((prevColour)=>(
    //     prevColour === 'red'?  'blue' :  'red'
    // )
    // )
      }

  return (
    <>
      {/* <div>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <button onClick={()=>{setCount(count-1)}}>-</button>
       </div> */}
       {/* <div>jkl;\97

        <button onClick={handleClick} fsdastyle={{color : colour}}>Click To Toggle Color</button>
       </div> */}
   
 


 
    <button onClick={() => setCount(count + 1)}>
      Click
    </button>



      

    </>
  )
}

export default App

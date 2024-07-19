import {  useEffect, useState } from "react"

const Form = () => {
    
     const [usdt,setUsdt]=useState("");
     const [ftm,setFtm]=useState("");
      
     
   function handleChange()
   {
      
   }

  return (
    
      
    <form className='form' >
        <div className='FormChild'>
                <div className='formLabel'>
                  <label>USDT</label>
                 <label>Available 0000</label>
                </div>
                <div>
                  <input type='text' value={usdt} onChange={handleChange}/>
                </div>
                <span > 
                    <label>0%</label>
                    <label>25%</label>
                    <label>50%</label>
                    <label>75%</label>
                    <label>MAX</label>
                </span>
        </div>
        <div className='FormChild'>
                <div className='formLabel'>
                  <label>FTM</label>
                 <label>Available 0000</label>
                </div>
                <div>
                  <input type='text' value={ftm} onChange={handleChange} />
                </div>
                <span > 
                   <label>0%</label>
                    <label>25%</label>
                    <label>50%</label>
                    <label>75%</label>
                    <label>MAX</label>
                    </span>
        </div>
    </form>

    
  )
}

export default Form


const Deposite = () => {
  return (
    <section >
       <div className="container">

    <div className="step completed">
      <div className="v-stepper">
        <div className="circle">1</div>
        <div className="line"></div>
      </div>

      <div className="content">
        <label> 
            First deposit into stable pool use 11 rate
        </label>
       
      </div>
  </div>
  
 
  <div className="step completed">
    <div className="v-stepper">
      <div className="circle">2</div>
      <div className="line"></div>
    </div>

    <div className="content">
    <label>
        10% slippage applied...
    </label>

    </div>
  </div>
  

  <div className="step completed">
      <div className="v-stepper">
        <div className="circle">3</div>
        <div className="line"></div>
      </div>

      <div className="contentbutt">
      <label>Allowance not granted for USDT</label>
        <button>Allow USDT</button>
        
      </div>
  </div>
  


  <div className="step completed">
      <div className="v-stepper">
        <div className="circle">3</div>
        <div className="line"></div>
      </div>

      <div className="contentbutt">
         <label>Allowance not granted for USDT</label>
         <button>Allow FTM</button>

      </div>
  </div>
  
  <div className="step completed">
      <div className="v-stepper">
        <div className="circle">3</div>
        
      </div>

      <div className="content">
      <label>Waiting for next actions...</label>
       

      </div>
  </div>

  
</div>

    </section>
  )
}

export default Deposite
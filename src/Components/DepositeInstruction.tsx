

const DepositeInstruction = () => {
  return (
    <section >
       <div className="container">

    <div className="step completed">
      <div className="v-stepper">
        <div className="circle">1</div>
        <div className="line"></div>
      </div>

      <div className="content">
        <label>  You are depositing liquidity into a Basic pool Also known as the constant product pool or AMM the liquidity in these pools is added over the ful price range (0 to ∞) and requires little to no maintenance. 
        </label>
        <p>
        The pool liquidity is kept in balance using the formula x*y + y³x ≥ k

        </p>
      </div>
  </div>
  
 
  <div className="step completed">
    <div className="v-stepper">
      <div className="circle">2</div>
      <div className="line"></div>
    </div>

    <div className="content">
    <label>Fill-in the deposit amounts. We calculate the depositamounts to match the liquidity reserves in  the pool. Pools without liquidity willuse yourdeposit for iital pool price.</label>

    </div>
  </div>
  

  <div className="step completed">
      <div className="v-stepper">
        <div className="circle">3</div>
       
      </div>

      <div className="content">
      <label>After you deposit you can stake the liquidity</label>

      </div>
  </div>
  

  
  
  
</div>

    </section>
  )
}

export default DepositeInstruction

import styled from 'styled-components'
import DepositeInstruction from './DepositeInstruction'
import Deposite from './Deposite'
const H1=styled.section`
  font-size: 30px;
`
const Dashboard = () => {
  return (
    <div className='Deposite'>
        <H1>New Deposit</H1>
        <DepositeInstruction/>
        <Deposite/>
    </div>
  )
}

export default Dashboard
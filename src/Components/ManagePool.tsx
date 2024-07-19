
import Form from './Form'
import Dashboard from './Dashboard'
import styled from 'styled-components'
import Section from './Section'

const CustomSection = styled.section`

padding: 20px;
color: white;

`



const H1=styled.section`
  font-size: 30px;
`

const ManagePool = () => {
  return (
    <CustomSection>

         <H1>Manage Pool</H1>
         <p style={{color:"silver"}}>Manage your position</p>


        <div className='maincontainer'>
          <div className='formContainer'>  
             <Section/>
             <Form/>
           </div>
           <Dashboard/>
        </div>
    </CustomSection>
  )
}

export default ManagePool
import React from "react"
import styled from "styled-components"
import Spacer from "react-spacer"

import Layout from "../components/layout"
import HeroShort from "../components/heroShort"


const TeachStyle = styled.div`
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
}  
.curve {
  grid-area: 1 / 1 / 2 / 2;

  }
  .tag-line {
    grid-area: 1 / 1 / 2 / 2;
    top: 3rem;
    text-align: center;
  }

  .content {
    background-color: white;
  }
`


const Curve =(props) =>{
  return(
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={props.className}>
    <path fill="#990D35" fill-opacity="0.6" d="M0,128L120,112C240,96,480,64,720,53.3C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
    </path>
  </svg>
  )
};

const TeachHeader = () => {
  return(
    <TeachStyle>
      <div className="container">
        <div className="curve">
        <Curve />  
        </div>
        <div className="tag-line">
          <h2 className='tag-line'>
          tailored tutoring for high school pupils and university students
          </h2>
        </div>
      </div>
    </TeachStyle>

  )
}

const TeachContent = () => {
  return(
    <TeachStyle>
      <h4 class=''>
        Heyy there
      </h4>
    </TeachStyle>
  )
}
const TeachPage = () => {
  return (
    <Layout>
      <HeroShort text='teach' class='highlighted1'/>
      <Spacer height='4.5rem' />
      <TeachHeader />
      <TeachContent />
    </Layout>
  )
}

export default TeachPage
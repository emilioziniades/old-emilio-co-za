import React from "react"
import styled from "styled-components"
import Spacer from "react-spacer"

import Layout from "../components/layout"
import HeroShort from "../components/heroShort"
import emojiBuilder from "../components/menuHeader"


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
  margin-top: 38px;
  text-align: center;
  color: eggshell;
}
.content {
  background-color: white;
  margin-top: -4px;
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
          tailored tutoring for high school and university students
          </h2>
        </div>
      </div>
    </TeachStyle>

  )
}

const Blurb = () => {
  return(
      <div style={{backgroundColor: 'white', marginTop: '-8px', padding: '1rem 2rem 1rem 2rem'}}>
        <p style={{textAlign: 'justify'}}>
        Since 2016, I have managed my own tutoring business. I have also tutored and marked essays for the Philosophy and Economics departments at the University of Cape Town.
        <br/><br/>
        I hold a BSocSci in Philosophy, Politics and Economics (with distinction) and a BCom Hons in Economics from the University of Cape Town. I matriculated with nine distinctions from St John’s College, Johannesburg.
        <br/><br/>
        Online or in-person, I can support you with your immediate study needs, and share with you my personal study and organizational techniques which have help me achieve excellence throughout school and university. 
        <br/> <br/>
        I am offering assistance with tests, assignments and exams in the following subjects:
        </p>
      </div>
      

  )
}

const OfferingStyle = styled.div`
.parent {
  background-color: white;
  margin-top: -25px;
  }
  .lists {
    list-style-type: none;
  }
  .subject-heading {
    
  }
  .hs-header {
    list-style-type: ${emojiBuilder('🏫')};
    font-weight: bold;
    padding: 1ch;
  }
  .uni-header {
    list-style-type: ${emojiBuilder('🎓')};
    font-weight: bold;
    padding: 1ch;
  }
  .hs-list {
    list-style-type: ${emojiBuilder('📘')};
  }
  .uni-list {
    list-style-type: ${emojiBuilder('📗')};
  }
  .div1 {
    text-align: center;
  }
  .div2 {
    text-align: center;
  }
`

const Offering = () => {
  return(
    <OfferingStyle >
      <div class="parent">
        <div class="div1"> 
        <ul >
          <li class='hs-header'>High school</li>
            <ul class='hs-list'>
              <li>Mathematics</li>
              <li>English</li>
              <li>History</li>
              <li>Science</li>
              <li>AP Mathematics and English</li>
          </ul>
          </ul>
        </div>
        <div class="div2">
          <ul >
          <li class='uni-header'>Undergraduate University</li>
            <ul class='uni-list'>
                <li>Economics</li>
                <li>Philosophy</li>
                <li>Politics</li>
                <li>Mathematics</li>
              </ul>
              </ul>
        </div>
        </div>
    </OfferingStyle> 
  )
}
const TeachPage = () => {
  return (
    <Layout>
      <HeroShort text='teach' class='highlighted1'/>
      <TeachHeader />
      <Blurb />
      <Offering />
    </Layout>
  )
}

export default TeachPage
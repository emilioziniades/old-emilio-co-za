import React from "react";
import styled from "styled-components";
import Spacer from "react-spacer";

import Layout from "../components/layout";
import HeroShort from "../components/heroShort";


const TeachStyle = styled.div`
    .parent {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 5px;
        grid-row-gap: 10px;
    }
    .parent1 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 0px; 
    }
    .div1 { 
        grid-area: 1 / 1 / 2 / 4; 
        background-color: none;
        z-index: -1;
    }
    .div2 { 
        grid-area: 1 / 1 / 2 / 4;
        margin: auto;
        width: 75%;
    }
    .div3 { grid-area: 1 / 1 / 2 / 4; }
    .div4 { grid-area: 2 / 1 / 3 / 2; }
    .div5 { grid-area: 2 / 2 / 3 / 3; }
    .div6 { grid-area: 2 / 3 / 3 / 4; }
    .div7 { grid-area: 3 / 1 / 4 / 4; }
    .div8 { grid-area: 4 / 1 / 5 / 4; }
    .div9 { grid-area: 5 / 1 / 6 / 4; }
    .div10 { 
        grid-area: 1 / 1 / 6 / 4;
        background-color: white
        z-index: -1; }  
`


const TeachHeader = () => {
  return(
    <TeachStyle>
    <div class="parent">
    <div class="div1"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#990D35" fill-opacity="0.6" d="M0,128L120,112C240,96,480,64,720,53.3C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>
    <div class="div2"> 
        <h2>
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
    <div class='parent1'>
        <div class="div3">
        Since 2016, I have managed my own tutoring business. I also tutored and marked essays for the University of Cape Town Philosophy and Economics departments.
        <br/>
        <br />
    I hold a BSocSci in Philosophy, Politics and Economics (with distinction) and a BCom Hons in Economics from the University of Cape Town. I matriculated with nine distinctions from St John’s College Johannesburg.
        <br/>
        <br />
    Online or in-person, I can support you with your immediate study needs, and share with you my personal study and organizational techniques which have help me achieve excellence throughout school and university.

    I am offering assistance with
        
        </div>
        <div class="div4"> Offering </div>
        <div class="div5"> For </div>
        <div class="div6"> Subjects </div>
        <div class="div7"> Email form </div>
        <div class="div8"> Testimonials </div>
        <div class="div9"> Credentials </div>
        <div class="div10"> </div> 
    </div>

        </TeachStyle>

    )
}

const TeachPage = () => {
  return (
    <Layout>
    <HeroShort text='teach' class='highlighted1'/>
      <TeachHeader />
      {/* <TeachContent /> */}
    </Layout>
  )
}

export default TeachPage
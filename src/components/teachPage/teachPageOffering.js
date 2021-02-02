import React from "react"
import styled from "styled-components"

const TeachOfferingStyle = styled.div`
.parent {
  background-color: white;
  margin-top: -25px; 
  
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
  }
  .lists {
    list-style-type: none;
  }
  .subject-heading {
    
  }
  .hs-header {
    list-style-type: '🏫 ';
    list-style-position: inside;
    font-weight: bold;
    padding: 2ch;
  }
  .uni-header {
    list-style-type: '🎓 ';
    list-style-position: inside;    
    font-weight: bold;
    padding: 2ch;
  }
  .hs-list {
    list-style-type: '📘 ';
    list-style-position: inside;
  }
  .uni-list {
    list-style-type: '📗 ';
    list-style-position: inside;
  }
  .div1 {
    text-align: left;
    grid-area: 1 / 2 / 2 / 3;
  }
  .div2 {
    text-align: left;
    grid-area: 1 / 2 / 2 / 3;
  }
`

const Offering = () => {
  return(
    <TeachOfferingStyle >
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
        </div>
      <div class="parent">
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
    </TeachOfferingStyle> 
  )
}

export default Offering;
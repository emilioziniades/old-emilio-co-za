import React from "react"
import styled from "styled-components"

// const TeachOfferingStyle = styled.div`
//    {
//     background-color: white;
//   }
//   .parent {
//     padding: 0 0 10px 0;
//     margin: -25px 0 0 25%;
//   }
//   .lists {
//     list-style-type: none;
//   }
//   .subject-heading {
//   }
//   .hs-header {
//     list-style-type: "🏫 ";
//     list-style-position: inside;
//     font-weight: bold;
//     padding: 2ch;
//   }
//   .uni-header {
//     list-style-type: "🎓 ";
//     list-style-position: inside;
//     font-weight: bold;
//     padding: 2ch;
//   }
//   .hs-list {
//     list-style-type: "📘 ";
//     list-style-position: inside;
//   }
//   .uni-list {
//     list-style-type: "📗 ";
//     list-style-position: inside;
//   }
//   .div1 {
//     text-align: left;
//     grid-area: 1 / 2 / 2 / 3;
//   }
//   .div2 {
//     text-align: left;
//     grid-area: 1 / 2 / 2 / 3;
//   }
// `

const TeachOfferingStyle = styled.div``

const Offering = () => {
  return (
    <TeachOfferingStyle>
      <div class="parent">
        <div class="div1">
          <ul>
            <li class="hs-header">High school</li>
            <ul class="hs-list">
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
          <ul>
            <li class="uni-header">Undergraduate University</li>
            <ul class="uni-list">
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

export default Offering

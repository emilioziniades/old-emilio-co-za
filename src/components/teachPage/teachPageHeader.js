import React from "react"
import styled from "styled-components"

// const TeachHeaderStyle = styled.div`
//   .container {
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: 1fr;
//     grid-column-gap: 0px;
//     grid-row-gap: 0px;
//   }
//   .curve {
//     grid-area: 1 / 1 / 2 / 2;
//   }
//   .tag-line {
//     grid-area: 1 / 1 / 2 / 2;
//     margin-top: 47px;
//     text-align: center;
//     color: #f9f7f0;
//     padding-left: 1rem;
//     padding-right: 1rem;
//   }
//   .content {
//     margin-top: -4px;
//   }
// `

const TeachHeaderStyle = styled.div``

const Curve = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={props.className}
    >
      <path
        fill="#990D35"
        fill-opacity="0.6"
        d="M0,128L120,112C240,96,480,64,720,53.3C960,43,1200,53,1320,58.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>
  )
}

const TeachHeader = () => {
  return (
    <TeachHeaderStyle>
      <div className="container">
        <div className="curve">
          <Curve />
        </div>
        <div className="tag-line">
          <h2 className="tag-line">
            tailored tutoring for high school and university students
          </h2>
        </div>
      </div>
    </TeachHeaderStyle>
  )
}

export default TeachHeader

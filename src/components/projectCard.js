import React from "react"
import styled from "styled-components"

const StyledCard = styled.div``

const ProjectCard = ({ title, link, description }) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <a href={link}>Source</a>
      <p>{description}</p>
    </StyledCard>
  )
}

export default ProjectCard

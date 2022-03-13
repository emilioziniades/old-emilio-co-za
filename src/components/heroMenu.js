// A component which takes in 'text' and 'emoji', and returns a word that, when hovered on, becomes an emoji
import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"

import { StyledHeroMenu } from "./styles"

const space = "\xa0".repeat(3)

// Hook
function useHover() {
  const [value, setValue] = useState(false)

  const ref = useRef(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(() => {
    const node = ref.current

    if (node) {
      node.addEventListener("mouseover", handleMouseOver)
      node.addEventListener("mouseout", handleMouseOut)

      return () => {
        node.removeEventListener("mouseover", handleMouseOver)
        node.removeEventListener("mouseout", handleMouseOut)
      }
    }
  })

  return [ref, value]
}

const HoverEmoji = ({ to, className, emoji, text }) => {
  const [hoverRef, isHovered] = useHover()

  const menuEmoji = space + emoji + space

  return (
    <div ref={hoverRef} className="menu-header">
      <Link to={to}>
        <span className={className}>{isHovered ? menuEmoji : text}</span>
      </Link>
    </div>
  )
}

const HeroMenu = () => {
  return (
    <StyledHeroMenu>
      <h2>
        <div className="menu-header">I</div>
        <HoverEmoji
          text="teach,"
          emoji="📚"
          to="/teach"
          className="highlighted-teach"
        />
        <HoverEmoji
          text="write"
          emoji="📝"
          to="/write"
          className="highlighted-write"
        />
        <div className="menu-header">and</div>
        <HoverEmoji
          text="code"
          emoji="💻"
          to="/code"
          className="highlighted-code"
        />
        <br />
      </h2>
    </StyledHeroMenu>
  )
}

export default HeroMenu

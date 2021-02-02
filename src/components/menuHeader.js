// A component which takes in 'text' and 'emoji', and returns a word that, when hovered on, becomes an emoji
import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledHeader = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
  .menu-header{
    display: inline-block;
    float: left;
    padding: 4px 4px 4px 4px;
  }
  .hero-image {
    float: left; 
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
  .highlighted1 {
    box-shadow: inset 0 -2.5rem 0 #E69EAB;
  }
  .highlighted2 {
    box-shadow: inset 0 -2.5rem 0 #BECFEE;
  }`


  function emojiInserter(emoji, text) {
    const space = "_".repeat(text.length)
    return (
      space.substr(0, space.length/2) + emoji + space.substr(space.length/2)
    )
  }

// function emojiBuilder (emoji) {
//     return <span role="img" aria-label="emoji">{emoji}</span>;
// };

function HoverEmoji (props){
    const [hoverRef, isHovered] = useHover();

    const menuEmoji = emojiInserter(props.emoji, props.text)

    return (
  
      <div
        ref={hoverRef}
        className='menu-header'
        >
        <Link to={props.to}>
          <span className={props.class}>
          {isHovered ? menuEmoji : props.text}
          </span>
        </Link>
      </div>
    );
  }
  
  // Hook
  function useHover() {
  
    const [value, setValue] = useState(false);
  
    const ref = useRef(null);
  
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
  
    useEffect(
      () => {
        const node = ref.current;

        if (node) {
          node.addEventListener('mouseover', handleMouseOver);
          node.addEventListener('mouseout', handleMouseOut);
  
          return () => {
  
            node.removeEventListener('mouseover', handleMouseOver);
            node.removeEventListener('mouseout', handleMouseOut);
  
          };
  
        }
  
      },
    );
  
  
  
    return [ref, value];
  
  }

  
const MenuHeader = () => {
    return(
        <StyledHeader>
        <h2> 
        <div className="menu-header">
          I
        </div>
        <HoverEmoji text='teach,' emoji='📚' to='/teach' class='highlighted1'/>
        <HoverEmoji text='write' emoji='📝' to='/write' class='highlighted2'/>
        <div className="menu-header" >
          and
        </div>
        <HoverEmoji text='code'emoji='💻' to='/code' class='highlighted' />
        <br />
        </h2>
        </StyledHeader> 
            
    )
}

export default MenuHeader
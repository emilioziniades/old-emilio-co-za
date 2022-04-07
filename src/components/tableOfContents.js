import React from "react"
import Slugger from "github-slugger"
import { Link } from "gatsby"

import { StyledTOC } from "./styles"

const test = [
  { value: "root", depth: 1 },
  { value: "A", depth: 2 },
  { value: "A.1", depth: 3 },
  { value: "A.1.a", depth: 4 },
  { value: "A.1.b", depth: 4 },
  { value: "A.2", depth: 3 },
  { value: "B", depth: 2 },
  { value: "B.1", depth: 3 },
]

const slugger = new Slugger()

function childrenOf(parent, items) {
  var children = []
  var reachedItem = false

  for (const potentialChild of items) {
    if (potentialChild.value === parent.value) {
      reachedItem = true
      continue
    }

    if (reachedItem) {
      if (potentialChild.depth === parent.depth + 1) {
        children.push(potentialChild.value)
      } else if (potentialChild.depth === parent.depth) {
        break
      } else if (
        potentialChild.depth <= parent.depth ||
        potentialChild.depth > parent.depth + 1
      ) {
        continue
      }
    }
  }
  return children
}

function getAllChildren(items) {
  const allChildren = {}
  for (const item of items) {
    const children = childrenOf(item, items)
    allChildren[item.value] = children
  }
  return allChildren
}

function getStartItems(items, itemsWithChildren, startDepth) {
  const startItems = []
  for (const i of items) {
    console.log(i)
    if (i.depth === startDepth) {
      const obj = { value: i.value, children: itemsWithChildren[i.value] }
      startItems.push(obj)
    }
  }
  return startItems
}

// var itemsWithChildren = getAllChildren(test)
var itemsWithChildren = getAllChildren(test)
const NestedList = ({ item, children }) => {
  if (children.length === 0) {
    return <li>{item}</li>
  } else {
    const childItems = children.map(child => (
      <NestedList item={child} children={itemsWithChildren[child]} />
    ))
    return (
      <>
        <li>{item}</li>
        <ul>{childItems}</ul>
      </>
    )
  }
}

const TableOfContents = ({ headings }) => {
  // itemsWithChildren = getAllChildren(headings)
  const startItems = getStartItems(test, itemsWithChildren, 2)
  return (
    <StyledTOC>
      <ul>
        {startItems.map(start => (
          <NestedList item={start.value} children={start.children} />
        ))}
      </ul>
      <ul>
        {headings
          .filter(heading => heading.depth !== 1)
          .map(heading => (
            <li key={heading.value}>
              <Link to={"#" + slugger.slug(heading.value)}>
                {heading.value}
              </Link>
            </li>
          ))}
      </ul>
    </StyledTOC>
  )
}

export default TableOfContents

// ----------------------------------------------------------------------

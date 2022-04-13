import React from "react"
import { slug } from "github-slugger"
import { Link } from "gatsby"

import { StyledTOC } from "./styles"

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
    if (i.depth === startDepth) {
      const obj = { value: i.value, children: itemsWithChildren[i.value] }
      startItems.push(obj)
    }
  }
  return startItems
}

const ListItem = ({ item, children }) => (
  <li key={item}>
    <Link to={"#" + slug(item)}>{item}</Link>
    {children}
  </li>
)

const NestedList = ({ item, children, allItems }) => {
  if (children.length === 0) {
    return <ListItem item={item} />
  } else {
    const childItems = children.map(child => (
      <NestedList item={child} children={allItems[child]} allItems={allItems} />
    ))
    return (
      <>
        <ListItem item={item}>
          <ul>{childItems}</ul>
        </ListItem>
      </>
    )
  }
}

const TableOfContents = ({ headings }) => {
  const itemsWithChildren = getAllChildren(headings)
  const startItems = getStartItems(headings, itemsWithChildren, 2)
  return (
    <StyledTOC>
      <ul>
        {startItems.map(start => (
          <NestedList
            item={start.value}
            children={start.children || []}
            allItems={itemsWithChildren}
          />
        ))}
      </ul>
    </StyledTOC>
  )
}

export default TableOfContents

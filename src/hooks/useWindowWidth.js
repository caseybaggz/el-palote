// @flow

import { useState, useEffect } from "react"

function getInnerWidth(): number {
  try {
    return window.innerWidth;
  } catch(e) {
    return;
  }
}

export default function(): number {
  const [width, setWidth] = useState(getInnerWidth())
  useEffect(() => {
    const handleResize = () => setWidth(getInnerWidth())
    try {
      window.addEventListener("resize", handleResize)
    } catch(e) {
      return;
    }
    return () => {
      try {
        window.removeEventListener("resize", handleResize)
      } catch(e) {
        return;
      }
    }
  })

  return width
}

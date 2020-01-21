import React from "react"
import Segment from "./segment_7"

function Segments({value}) {
  const floatString = String(value)
  const charList = floatString.split('')

  const segmentList = charList.map(
    (char, index) => (<Segment key={index} value={char} />)
  )

  return (
    <>
      {segmentList}
    </>
  )
}

export default Segments;

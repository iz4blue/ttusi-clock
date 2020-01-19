import React, { useState } from "react"

function Percent({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <div>2020 <span id="percent">{count.toFixed(6)}</span>%</div>
    </>
  );
}

export default Percent;

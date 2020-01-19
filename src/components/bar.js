import React, { useState } from "react"

function Bar({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <div>Progress bar</div>
    </>
  );
}

export default Bar;

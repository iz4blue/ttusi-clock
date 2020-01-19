import React, { useState } from "react"

function Bar({initialValue}) {
  const [value, setValue] = useState(initialValue);
  return (
    <>
      <div>Progress bar</div>
    </>
  );
}

export default Bar;

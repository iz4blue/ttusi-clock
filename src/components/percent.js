import React, { useState } from "react"

function Percent({initialValue}) {
  const [value, setPercent] = useState(initialValue);

  const onChangeValue = e => {
    setPercent(e.target.value);
  };

  return (
    <>
      <div>2020 <span id="percent">{value.toFixed(6)}</span>%</div>
    </>
  );
}

export default Percent;

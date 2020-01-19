import React from "react"

function Percent(props) {
  return (
    <>
      <div>2020 <span id="percent">{props.value.toFixed(6)}</span>%</div>
    </>
  );
}

export default Percent;

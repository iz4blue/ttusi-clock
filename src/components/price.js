import React from "react"

function Price({value}) {
  function numberWithCommas(x) {
	    return parseInt(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

  return (
    <>
      <div>2020년 총 가치는 1,000,000,000원 입니다.</div>
      <div>지금까지 사용한 금액은 <span>{numberWithCommas(value * 1000000000)}</span>원 입니다.</div>
    </>
  );
}

export default Price;

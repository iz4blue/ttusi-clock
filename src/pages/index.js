import React from "react"
import Bar from "../components/bar"
import Percent from "../components/percent"

function getPercent() {
  const date_first_2020 = new Date(2020, 0, 1, 0, 0, 0, 0);
  const date_last_2020 = new Date(2020, 11, 31, 23, 59, 59, 999);
  const ts_2020_total = date_last_2020.getTime() - date_first_2020.getTime();

  let date_now = new Date();
  let ts_now_from_first_2020 = date_now.getTime() - date_first_2020.getTime();
  let percent = ts_now_from_first_2020 / ts_2020_total * 100
  console.log(percent)
  globalPercent = percent

  return globalPercent
}

let globalPercent = getPercent();

function next() {
  getPercent();
  return setTimeout(next, 500);
}

export default () => {
  let timer = setTimeout(next, 500);

  return (
    <div>
      <Bar initialCount={globalPercent}/>
      <Percent initialCount={globalPercent}/>

      <button onClick={() => getPercent()}>reset</button>
      <button onClick={() => clearTimeout(timer)}>stop</button>
    </div>
  )
}

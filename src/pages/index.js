import React, { useEffect, useState } from "react"
import Bar from "../components/bar"
import Percent from "../components/percent"
import Segment from "../components/segment_7"

function getPercent() {
  const date_first_2020 = new Date(2020, 0, 1, 0, 0, 0, 0);
  const date_last_2020 = new Date(2020, 11, 31, 23, 59, 59, 999);
  const ts_2020_total = date_last_2020.getTime() - date_first_2020.getTime();

  let date_now = new Date();
  let ts_now_from_first_2020 = date_now.getTime() - date_first_2020.getTime();

  return ts_now_from_first_2020 / ts_2020_total * 100
}

export default () => {
  const [globalPercent, setGlobalPercent] = useState(getPercent())

  useEffect(() => {
    const timer = setTimeout(() => {
      setGlobalPercent(getPercent())
    }, 500)

    return () => clearInterval(timer);
  }, [globalPercent])

  return (
    <div>
      <Bar initialValue={globalPercent} />
      <Percent value={globalPercent} />
      <div id="clock-container">
        <Segment />
        <Segment />
        <Segment />
      </div>
    </div>
  )
}

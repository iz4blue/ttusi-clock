import React, { useEffect, useState } from "react"
import Price from "../components/price"

function getProgress() {
  const date_first_2020 = new Date(2020, 0, 1, 0, 0, 0, 0);
  const date_last_2020 = new Date(2020, 11, 31, 23, 59, 59, 999);
  const ts_2020_total = date_last_2020.getTime() - date_first_2020.getTime();

  let date_now = new Date();
  let ts_now_from_first_2020 = date_now.getTime() - date_first_2020.getTime();

  return ts_now_from_first_2020 / ts_2020_total
}

export default () => {
  const [progress, setProgress] = useState(getProgress())
  const update = time => {
    setProgress(getProgress())
  }

  useEffect(() => {
    update()
  }, [progress])

  window.requestAnimationFrame(update)

  return (
    <div>
      <Price value={progress} />
    </div>
  )
}

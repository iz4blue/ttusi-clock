import React from "react"

export default () => {
  const date_now = new Date();
  const date_first_2020 = new Date(2020, 0, 1, 0, 0, 0, 0);
  const date_last_2020 = new Date(2020, 11, 31, 23, 59, 59, 999);

  const ts_2020_total = date_last_2020.getTime() - date_first_2020.getTime();
  const ts_now_from_first_2020 = date_now.getTime() - date_first_2020.getTime();

  const percent = ts_now_from_first_2020 / ts_2020_total * 100
  console.log(percent)

  return (
    <div>
      <div>Progress bar</div>
      <div>2020 {percent.toFixed(6)}%</div>
    </div>
  )
}

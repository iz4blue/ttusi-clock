/*
 다음의 code 를 참조함 : https://codepen.io/0x04/pen/KdBuA
 */
import React from "react"
import styles from "../styles/segment_7.module.css"

function getStyle(value) {
  switch(value) {
    case 0: case '0': return styles.displayNo0
    case 1: case '1': return styles.displayNo1
    case 2: case '2': return styles.displayNo2
    case 3: case '3': return styles.displayNo3
    case 4: case '4': return styles.displayNo4
    case 5: case '5': return styles.displayNo5
    case 6: case '6': return styles.displayNo6
    case 7: case '7': return styles.displayNo7
    case 8: case '8': return styles.displayNo8
    case 9: case '9': return styles.displayNo9
    case '.': return styles.displayO
    default:
      return styles.displayNo0
  }
}

function Segment({value}) {
  return (
    <div className={[styles.displayContainer, styles.displaySize12, getStyle(value)].join(' ')}>
      <div className={[styles.segmentX, styles.segmentA].join(' ')}>
        <span className={styles.segmentBorder}></span>
      </div>
      <div className={[styles.segmentY, styles.segmentB].join(' ')}>
        <span className={styles.segmentBorder}></span>
      </div>
      <div className={[styles.segmentY, styles.segmentC].join(' ')}>
        <span className={styles.segmentBorder}></span>
      </div>
      <div className={[styles.segmentX, styles.segmentD].join(' ')}>
        <span className={styles.segmentBorder}></span>
      </div>
      <div className={[styles.segmentY, styles.segmentE].join(' ')}>
        <span className={styles.segmentBorder}></span>
      </div>
      <div className={[styles.segmentY, styles.segmentF].join(' ')}>
        <span className={styles.segmentBorder}></span>
      </div>
      <div className={[styles.segmentX, styles.segmentG].join(' ')}>
        <span className={styles.segmentBorder}></span>
      </div>
    </div>
  );
}

export default Segment;

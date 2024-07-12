import React, { forwardRef } from 'react'
const ResultModal= forwardRef(function ResultModal({result,targetTime},ref) {
  return (
      <dialog className='result-modal' ref={ref}>
        <h1>You {result}</h1>
        <p>The target time was <strong>{targetTime} seconds</strong></p>
        <p>You stopped the timer with <strong>x seconds left</strong></p>
        <form method="dialog">
        <button>close</button>
        </form>
      </dialog>
  )
})

export default ResultModal
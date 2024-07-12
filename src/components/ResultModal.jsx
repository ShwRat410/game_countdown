import React, { forwardRef, useImperativeHandle, useRef } from 'react'
const ResultModal= forwardRef(function ResultModal({result,targetTime},ref) {
    const dialog = useRef()
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal()
            }
        }
    })
  return (
      <dialog className='result-modal' ref={dialog}>
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
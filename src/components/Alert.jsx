import React from 'react'

import './alert.css'

function Alert({ message }) {
  const { status, content } = message

  const classStatus = () => {
    if (status == 200) {
      return 'success'
    } else if (status >= 400) {
      return 'fail'
    } else {
      return
    }
  }

  return (
    <div className={`${classStatus()} p-2 rounded`}>
      <span className="font-bold capitalize">{classStatus()}: </span> {content}
    </div>
  )
}

export default Alert

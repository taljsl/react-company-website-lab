import React from 'react'

const Content = ({view}) => {
  
    return (
    <div>
        {view.title === 'Home' ? null : view.title }
        {view.content}
    </div>
  )
}

export default Content

// Banner at top of page
import React from 'react'

const Header = ({headerContent}) => {
  console.log(headerContent.image)
    return (
    <div>
     <h1>{headerContent.text}</h1> 
     {/* <img src={headerContent.image} alt="" /> */}
     
    </div>
  )
}

export default Header

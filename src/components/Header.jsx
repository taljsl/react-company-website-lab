// Banner at top of page
import React from 'react'

const Header = ({headerContent, view}) => {
    
    
  
    return (
    <header>
     <h1>{view.title === 'Home' ? 'Three Nerds Incorporated' : view.title }</h1>
     
     </header>
     
    
  )
}

export default Header



import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayouts = ({children}) => {
  return (
    <div className='h-screen'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayouts
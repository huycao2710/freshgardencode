import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import Footer from '../FooterComponent/Footer'

const DefaultComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
            <Footer />
        </div>
    )
}

export default DefaultComponent
import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import Footer from '../FooterComponent/Footer'

const DefaultComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            <div style={{ marginBottom: '20px' }}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultComponent
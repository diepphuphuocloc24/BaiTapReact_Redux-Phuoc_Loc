import React from 'react'
import HeaderComponent from './1.header/HeaderComponent'
import BodyComponent from './2.body/index'
import FooterComponent from './3.footer/FooterComponent'

const MainTemplate = () => {
    return (
        <div className="bg-black text-gray-200 font-sans animate__animated animate__fadeIn">
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    )
}

export default MainTemplate

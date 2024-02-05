import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import WhoWeAre from './WhoWeAre'
import Events from './Events'
import Gallery from './Gallery'
import ContactUs from './ContactUs/ContactUs'
import JoinUs from './joinUs'

function Homepage() {
    return (
        <div className='h-screen'>
            <Navbar />
            <Banner />
            <WhoWeAre />
            <Events />
            <Gallery />
            {/* <ContactUs /> */}
            <JoinUs />
        </div>
    )
}

export default Homepage 
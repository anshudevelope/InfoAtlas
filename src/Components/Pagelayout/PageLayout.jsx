import React from 'react'
import Header from '../UI Components/Header'
import Footer from '../UI Components/Footer'
import { Outlet } from 'react-router-dom'

const PageLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default PageLayout

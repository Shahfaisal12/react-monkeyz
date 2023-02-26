import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from '../Layout/Base'
import Home from '../../pages/Home'
import PageNotFound from '../../pages/PageNotFound'
// import Strategy from '../Strategy'
// import ContactUs from '../ContactUs'

const RoutesPage = () => {
    return (
        <>
            <BrowserRouter>
                <Base>
                    <Routes >
                        <Route index path='/' element={<Home />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage
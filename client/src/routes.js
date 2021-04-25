import React from "react"
import { Route, Switch } from 'react-router-dom'
import Styles from './App.module.css'
import { Header } from './components/Header/Header'
import { Topline } from './components/Topline/Topline'
import { Mission } from './components/Mission/Mission'
import { Director } from './components/Director/Director'
import { Stats } from './components/Stats/Stats'
import { Slider } from './components/Slider/Slider'
import { Staff } from './components/Staff/Staff'
import { News } from './components/News/News'
import { Gallery } from './components/Gallery/Gallery'
import { Footer } from './components/Footer/Footer'

import { HistoryPage } from './pages/HistoryPage/HistoryPage'
import { StaffPage } from './pages/StaffPage/StaffPage'
import { PaymentPage } from './pages/PaymentPage/PaymentPage'
import { DocumentsPage } from './pages/DocumentsPage/DocumentsPage'
import { TimetablePage } from './pages/TimetablePage/TimetablePage'
import { NewsPage } from './pages/NewsPage/NewsPage'
import { GalleryPage } from './pages/GalleryPage/GalleryPage'
import { CoursesPage } from './pages/CoursesPage/CoursesPage'
import { Auth } from './pages/Auth/Auth'
import { Admin } from "./pages/Admin/Admin"

export const useRoutes = (isAuthentificated, userId) => {
    if (isAuthentificated) {
        return(
            <div className={Styles.main}>
                <Admin />
            </div>
        )
    }

    return(
        <div>
            <Header />
            <div className={Styles.scene}>
                <Switch>
                    <Route path="/" exact>
                        <div className={Styles.content}>
                            <Topline />
                            <Mission />
                            <Director />
                            <Stats />
                            <Slider />
                            <Staff />
                            <News />
                            <Gallery />
                        </div>
                    </Route>
                    <Route path="/schoolHistory" exact>
                        <HistoryPage />
                    </Route>
                    <Route path="/teachers" exact>
                        <StaffPage />
                    </Route>
                    <Route path="/payment" exact>
                        <PaymentPage />
                    </Route>
                    <Route path="/documents" exact>
                        <DocumentsPage />
                    </Route>
                    <Route path="/timetable" exact>
                        <TimetablePage />
                    </Route>
                    <Route path="/news" exact>
                        <NewsPage />
                    </Route>
                    <Route path="/gallery" exact>
                        <GalleryPage />
                    </Route>
                    <Route path="/courses" exact>
                        <CoursesPage />
                    </Route>
                    <Route path="/admin" exact>
                        <Auth />
                    </Route>
                </Switch>
            </div>
            <Footer />
        </div>
    )
}
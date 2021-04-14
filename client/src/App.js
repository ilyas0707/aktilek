import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

export const App = () => {
	return (
		<Router>
			<div className={Styles.app}>
				<Header />
				<div className={Styles.scene}>
					<Switch>
						<Route path="/main">
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
						<Route path="/schoolHistory">
							<HistoryPage />
						</Route>
						<Route path="/teachers">
							<StaffPage />
						</Route>
						<Route path="/payment">
							<PaymentPage />
						</Route>
						<Route path="/documents">
							<DocumentsPage />
						</Route>
						<Route path="/timetable">
							<TimetablePage />
						</Route>
						<Route path="/news">
							<NewsPage />
						</Route>
						<Route path="/gallery">
							<GalleryPage />
						</Route>
						<Route path="/courses">
							<CoursesPage />
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
			{/* <Redirect to="/main" /> */}
		</Router>
  	)
}

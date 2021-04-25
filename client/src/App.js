import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from "./routes"
import { useAuth } from "./hooks/auth.hook"
import { AuthContext } from "./context/AuthContext"
import Styles from './App.module.css'

export const App = () => {
	const { token, login, logout, userId } = useAuth()
	const isAuthentificated = !!token
	const routes = useRoutes(isAuthentificated, userId)
	return (
		<AuthContext.Provider value={{
			token, login, logout, userId, isAuthentificated
		}}>
			<Router>
				<div className={Styles.app}>
					{ isAuthentificated }
					{ routes }
				</div>
			</Router>
		</AuthContext.Provider>
  	)
}

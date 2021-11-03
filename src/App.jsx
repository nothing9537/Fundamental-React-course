import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./styles/App.css"
import Navbar from './Components/UI/navbar/NavBar'
import AppRoutes from './Components/AppRoutes'
import { AuthContext } from './context/index';

const App = () => {
	const [isAuth, setIsAuth] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if(localStorage.getItem("auth")) {
			setIsAuth(true)
		}
		setIsLoading(false)
	}, [])

	return(
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth,
			isLoading
		}}>
			<Router>
				<Navbar />
				<AppRoutes />
			</Router>
		</AuthContext.Provider>
	)
}

export default App
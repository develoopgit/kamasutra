import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Dialogs from "./components/Dialogs/Dialogs"
import Header from "./components/Header/Header"
import Profile from "./components/Profile/Profile"
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
	return (
		<Router>
			<div className="container main-wrapper-content">
				<Header />
				<Sidebar />
				<div class="content">
					<Routes>
						<Route path="/dialogs/*" element={<Dialogs />} />
						<Route path="/profile/*" element={<Profile />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App

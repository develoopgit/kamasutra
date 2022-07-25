import s from "./Sidebar.module.css"
import { NavLink } from "react-router-dom"
const Sidebar = () => {
	let activeClassName = s.activeLink
	return (
		<aside className={s.sidebar}>
			<nav className={s.navigation}>
				<ul>
					<li>
						<NavLink
							to="/profile"
							className={({ isActive }) =>
								isActive ? activeClassName : undefined
							}
						>
							Profile
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/dialogs"
							className={({ isActive }) =>
								isActive ? activeClassName : undefined
							}
						>
							Messages
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/news"
							className={({ isActive }) =>
								isActive ? activeClassName : undefined
							}
						>
							News
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar

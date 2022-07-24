import s from "./Sidebar.module.css"
import {Link} from "react-router-dom"
const Sidebar = () => {
	return (
		<aside className={s.sidebar}>
			<nav className={s.navigation}>
				<ul>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/dialogs">Messages</Link>
					</li>
					<li>
						<Link to="/news">News</Link>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar

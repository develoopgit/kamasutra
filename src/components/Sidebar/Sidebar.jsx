import style from "./Sidebar.module.css"

const Sidebar = () => {
	return (
		<aside className={style.sidebar}>
			<nav className={style.navigation}>
				<ul>
					<li>
						<a href="#">Profile</a>
					</li>
					<li>
						<a href="">About us</a>
					</li>
					<li>
						<a href="">Contact us</a>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar

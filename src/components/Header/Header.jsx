import style from "./Header.module.css"
import logo from "../../logo.svg"

const Header = () => {
	return (
		<header className={style.headerWrap}>
			<div className={style.logo}>
				<img src={logo} alt="" className="" />
			</div>
		</header>
	)
}
export default Header

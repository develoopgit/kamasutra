import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"

const MembersList = (props) => {
	let path = "/dialogs/" + props.id

	return (
		<li>
			<NavLink to={path}>{props.name}</NavLink>
		</li>
	)
}

const Messages = (props) => {
	return (
		<li>
			Author - {props.id} | Message - {props.message}
		</li>
	)
}

const Dialogs = () => {
	let membersListData = [
		{ id: 1, name: "Ivan" },
		{ id: 2, name: "David" },
		{ id: 3, name: "Gagik" },
		{ id: 4, name: "Robert" },
		{ id: 5, name: "Astghik" },
	]

	let messagesData = [
		{ id: 1, message: "Say Hi" },
		{ id: 2, message: "Say Hi 2" },
		{ id: 3, message: "Say Hi 3" },
		{ id: 4, message: "Say Hi 4" },
		{ id: 5, message: "Say Hi 5" },
		{ id: 1, message: "Say Hi second" },
		{ id: 2, message: "Say Hi second " },
	]
	let members = membersListData.map((el) => (
		<MembersList id={el.id} name={el.name} />
	))

	let messages = messagesData.map((el) => (
		<Messages id={el.id} message={el.message} />
	))
	return (
		<div className={s.dialogWrap}>
			<div className={s.dialogs}>
				<div className={s.membersList}>
					<ul>{members}</ul>
				</div>
			</div>
			<div className={s.membersList}>
				<div className={s.messages}>
					<ul>{messages}</ul>
				</div>
			</div>
		</div>
	)
}

export default Dialogs

import MyPosts from "./MyPosts/MyPosts"
import style from "./Profile.module.css"

const Profile = () => {
	return (
		<div className={style.profileSection}>
			<article>
				<h1>My profile part</h1>
			</article>
			<article>
				<MyPosts />
			</article>
		</div>
	)
}

export default Profile

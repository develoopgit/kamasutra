import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"

function MyPosts() {
	return (
		<div>
			<h2>MyPosts</h2>
			<Post />
			<Post />
			<Post />
		</div>
	)
}

export default MyPosts

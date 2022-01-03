import { useEffect, useState } from 'react';
import classes from './comment-list.module.css';

function CommentList({ eventId }) {
	const [comments, setComments] = useState([]);

	useEffect(async () => {
		const response = await fetch(`/api/comment/${eventId}`);
		const data = await response.json();
		setComments(data.comments);
	}, [eventId]);

	return (
		<>
			{comments.length !== 0 ? (
				<ul className={classes.comments}>
					{comments.map((comment) => {
						return (
							<li key={comment._id}>
								<p>{comment.comment}</p>
								<div>
									By <address>{comment.name}</address>
								</div>
							</li>
						);
					})}
				</ul>
			) : (
				<p>There is no comment yet. Wanna be first?</p>
			)}
		</>
	);
}

export default CommentList;

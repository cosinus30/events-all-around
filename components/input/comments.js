import { useContext, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
	const { eventId } = props;
	const [showComments, setShowComments] = useState(false);
	const { showNotification } = useContext(NotificationContext);

	function toggleCommentsHandler() {
		setShowComments((prevStatus) => !prevStatus);
	}

	async function addCommentHandler(commentData) {
		const response = await fetch(`/api/comment/${eventId}`, {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.status === 201) {
			showNotification({
				status: 'success',
				title: 'New Comment!',
				message: 'Comment added successfully',
			});
		} else {
			showNotification({
				status: 'error',
				title: 'Error',
				message: 'Something went wrong',
			});
		}
	}

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList eventId={eventId} />}
		</section>
	);
}

export default Comments;

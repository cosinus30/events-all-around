import { useContext, useState } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
	const [email, setEmail] = useState('');
	const {notification, showNotification} = useContext(NotificationContext);

	async function registrationHandler(event) {
		event.preventDefault();
		const response = await fetch('/api/register-newsletter', {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.status === 200) {
			setEmail('');
			showNotification({
				title: 'Welcome!',
				message: 'You have successfully subscribed to our newsletter.',
				status: 'success',
			})
		} else {
			showNotification({
				title: 'Ooops!',
				message: 'Something went wrong',
				status: 'error',
			})
		}
	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type="email"
						id="email"
						placeholder="Your email"
						aria-label="Your email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;

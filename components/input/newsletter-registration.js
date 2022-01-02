import { useState } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(undefined);

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
			setSuccess(true);
		} else {
			setSuccess(false);
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
      {success && <p>Thanks for subscribing!</p>}
		</section>
	);
}

export default NewsletterRegistration;

import Image from 'next/image';
import Link from 'next/link';
import styles from './event-item.module.css';

function EventItem({ data }) {
	const { title, image, date, location, id } = data;
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	console.log(data);

	return (
		<li className={styles.card}>
            <img src={'/' + image} alt={title}/>
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
					<div className={styles.date}>
						<time>{formattedDate}</time>
					</div>
					<div className={styles.address}>
						<address>{location}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Link href={`events/${id}`}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;

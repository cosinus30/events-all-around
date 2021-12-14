import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/button';
import styles from './event-item.module.css';
import DateIcon from '../icons/date-icon';
import AdressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

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
			<img src={'/' + image} alt={title} />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{title}</h2>
					<div className={styles.date}>
						<DateIcon />
						<time>{formattedDate}</time>
					</div>
					<div className={styles.address}>
						<AdressIcon />
						<address>{location}</address>
					</div>
				</div>
				<div className={styles.actions}>
					<Button link={`events/${id}`}>
						<span>Explore Event</span>
						<span className={styles.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default EventItem;

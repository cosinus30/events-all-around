import Link from 'next/link';
import EventItem from './event-item';
import styles from './event-list.module.css';

function EventList({ items }) {
	return (
		<ul className={styles.list}>
			{items.map((item) => {
				return (
					<EventItem key={item.id} data={item}/>
				);
			})}
		</ul>
	);
}

export default EventList;

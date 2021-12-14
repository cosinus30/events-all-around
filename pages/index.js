import Link from 'next/link';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

export default function Home() {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />

      <br/>
			<ul>
				<li>
					<Link href="/events">Events</Link>
				</li>
				<li>
					<Link href="/events/1">Event Detail</Link>
				</li>
				<li>
					<Link href="/events/2020/12/14">Event Filter</Link>
				</li>
			</ul>
		</div>
	);
}

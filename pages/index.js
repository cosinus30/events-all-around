import Link from 'next/link';
import EventList from '../components/events/event-list';
import { useFeaturedEvents } from '../hooks/data-hooks';

export default function Home({featuredEvents}) {

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}

export async function getStaticProps() {
	const featuredEvents = await useFeaturedEvents();
	console.log('Hey: ', featuredEvents)

	return {
		props: {
			featuredEvents: featuredEvents
		},
		revalidate: 3600
	}
}

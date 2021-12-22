import Head from 'next/head';
import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { useEvents } from '../../hooks/data-hooks';

function EventsPage({ allEvents }) {
	const router = useRouter();
	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	}

	return (
		<div>
			<Head>
				<title>All events</title>
				<meta name="description" content="Find a lot of great events that make you better" />
			</Head>
			<h1>All Events</h1>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={allEvents} />
		</div>
	);
}

export async function getStaticProps() {
	const allEvents = await useEvents();

	return {
		props: {
			allEvents: allEvents,
		},
		revalidate: 300,
	};
}

export default EventsPage;

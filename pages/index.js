import Head from 'next/head';
import EventList from '../components/events/event-list';
import { useFeaturedEvents } from '../hooks/data-hooks';
import NewsLetterRegistration from '../components/input/newsletter-registration';

export default function Home({ featuredEvents }) {
	return (
		<div>
			<Head>
				<title>Events All Around</title>
				<meta name="description" content="Find a lot of great events that make you better" />
			</Head>
			<EventList items={featuredEvents} />
			<NewsLetterRegistration />
		</div>
	);
}

export async function getStaticProps() {
	const featuredEvents = await useFeaturedEvents();

	return {
		props: {
			featuredEvents: featuredEvents,
		},
		revalidate: 3600,
	};
}

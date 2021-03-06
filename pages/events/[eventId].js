import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { useEvent, useFeaturedEvents } from '../../hooks/data-hooks';
import Comments  from '../../components/input/comments';
import Head from 'next/head';

function EventDetailPage({ event, eventId }) {
	if (!event) {
		return <h1>Loading...</h1>;
	}
	const { title, image, date, location, description } = event;
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<EventSummary title={title} />
			<EventLogistics date={date} address={location} image={image} imageAlt={title} />
			<EventContent>
				<p>{description}</p>
			</EventContent>
			<Comments eventId={eventId} />
		</>
	);
}

export async function getStaticProps({ params }) {
	const event = await useEvent(params.eventId);
	if (!event) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			eventId: params.eventId,
			event: event,
		},
		revalidate: 300,
	};
}

export async function getStaticPaths() {
	const events = await useFeaturedEvents();
	const paths = events.map((event) => {
		return {
			params: {
				eventId: event.id,
			},
		};
	});
	return {
		paths: paths,
		fallback: true,
	};
}

export default EventDetailPage;

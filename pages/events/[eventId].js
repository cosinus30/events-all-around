import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'

function EventDetailPage({ event }) {
	const { query } = useRouter();
	const { eventId } = query;
	const { title, image, date, location, description } = getEventById(eventId);
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	return (
		<>
            <EventSummary title={title}/>
            <EventLogistics ddate={date} address={location} image={image} imageAlt={title} />
            <EventContent> 
                <p>
                    {description}
                </p>
            </EventContent>
		</>
	);
}

export default EventDetailPage;

import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import { getFilteredEvents } from '../../dummy-data';

function FilteredEventsPage() {
	const router = useRouter();
	const [year, month] = router.query.params;

	if (!year || !month) {
		return <p className="center">Loading...</p>;
	}
	if (isNaN(+year) || isNaN(+month)) {
		return <p className="center">Invalid year or month</p>;
	}

	const filteredEvents = getFilteredEvents({ year: +year, month: +month });

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<p className="center">
				No events found for {year}/{month}
			</p>
		);
	}

	return (
		<div>
			<h1>Filtered Events Page!</h1>
			<EventList items={filteredEvents} />
		</div>
	);
}

export default FilteredEventsPage;

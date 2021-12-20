import EventList from '../../components/events/event-list';
import Button from '../../components/ui/button';
import { useFilteredEvents } from '../../hooks/data-hooks';

function FilteredEventsPage({ filteredEvents, year, month }) {
	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<div>
				<p className="center">
					No events found for {year}/{month}
				</p>
				<div className="center_div">
					<Button link={'/events/'}>Go to all events</Button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h1 className="center">
				Filtered Events for {year}/{month}
			</h1>
			<div className="center_div">
				<Button link={'/events/'}>Go to all events</Button>
			</div>
			<EventList items={filteredEvents} />
		</div>
	);
}

export async function getServerSideProps(req, res) {
	const [year, month] = req.query.params;
	if (!year || !month) {
		return <p className="center">Loading...</p>;
	}
	if (isNaN(+year) || isNaN(+month)) {
		return <p className="center">Invalid year or month</p>;
	}

	const filteredEvents = await useFilteredEvents({ year: +year, month: +month });

	return {
		props: {
			filteredEvents: filteredEvents,
			year: +year,
			month: +month,
		},
	};
}

export default FilteredEventsPage;

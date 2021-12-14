import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
    const allEvents = getAllEvents()

    return (
        <div>
            <h1>All Events</h1>
            <EventList items={allEvents}/>
        </div>
    )
}

export default EventsPage;
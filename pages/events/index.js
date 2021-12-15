import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function EventsPage() {
    const allEvents = getAllEvents()
    const router = useRouter()

    function findEventsHandler(year, month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <div>
            <h1>All Events</h1>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={allEvents}/>
        </div>
    )
}

export default EventsPage;
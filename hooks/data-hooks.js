import { firebaseURL } from "../constants";

export async function useEvents() {
	const response = await fetch(firebaseURL);
	const feauturedEventsObject = await response.json();
	const featuredEvents = [];
	for (const key in feauturedEventsObject) {
		featuredEvents.push({ id: key, ...feauturedEventsObject[key] });
	}
	return featuredEvents;
}

export async function useFeaturedEvents() {
	const response = await fetch(firebaseURL);
	const feauturedEventsObject = await response.json();
	const featuredEvents = [];
	for (const key in feauturedEventsObject) {
		if (feauturedEventsObject[key].isFeatured) featuredEvents.push({ id: key, ...feauturedEventsObject[key] });
	}
	return featuredEvents;
}

export async function useEvent(id) {
	const response = await fetch(`${firebaseURL}${id}.json`);
	const eventObject = await response.json();
	return eventObject;
}

export async function useFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;

	const allEvents = await useEvents();

	let filteredEvents = allEvents.filter((event) => {
		const eventDate = new Date(event.date);
		return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
	});

	return filteredEvents;
}

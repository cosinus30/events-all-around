import Image from 'next/image';
import Link from 'next/link';

function EventItem({ data }) {
	const { title, image, date, location, id } = data;
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	console.log(data);

	return (
		<li>
			<Image src={'/' + image} alt={title} width={196} height={64} />
			<div>
				<div>
					<h2>{title}</h2>
					<div>
						<time>{formattedDate}</time>
					</div>
					<div>
						<address>{location}</address>
					</div>
				</div>
				<div>
					<Link href={`events/${id}`}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}

export default EventItem;

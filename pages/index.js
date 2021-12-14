import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Home Page!</h1>
			<ul>
				<li>
					<Link href="/events">Events</Link>
				</li>
        <li>
          <Link href="/events/1">Event Detail</Link>
        </li>
        <li>
          <Link href="/events/2020/12/14">Event Filter</Link>
        </li>
			</ul>
		</div>
	);
}

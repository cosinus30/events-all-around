import { MongoClient } from 'mongodb';
import { password, username } from '../../../constants';

export default async function handler(req, res) {
	const client = await MongoClient.connect(
		`mongodb+srv://${username}:${password}@cluster0.5rv5l.mongodb.net/events?retryWrites=true&w=majority`
	);
	const db = client.db();

	if (req.method === 'POST') {
		const email = req.body.email;
		const name = req.body.name;
		const comment = req.body.text;
		const eventId = req.query.eventId;

		if (!email || !name || !comment) {
			res.status(400).json({ error: 'Email, name and comment required' });
			return;
		}

		const newComment = {
			email,
			name,
			comment,
			eventId
		};

		const result = await db.collection('comments').insertOne(newComment);
		res.status(201).json({ message: 'Success' });
		client.close()
	} else if (req.method === 'GET') {
		const results = await db.collection('comments').find({ eventId: req.query.eventId }).toArray();
		console.log(results)
		res.status(200).json({ comments: results });
	}
}

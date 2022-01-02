import { MongoClient } from 'mongodb';
import { password, username } from '../../constants';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const email = req.body.email;
		console.log(email);

		if (!email) {
			res.status(400).json('Email required');
			return;
		}

		const client = await MongoClient.connect(
			`mongodb+srv://${username}:${password}@cluster0.5rv5l.mongodb.net/newsletter?retryWrites=true&w=majority`
		);
		const db = client.db();
		await db.collection('emails').insertOne({ email });
		client.close();

		res.status(200).json({ message: 'Success' });
	}
}

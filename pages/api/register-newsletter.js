import { MongoClient } from 'mongodb';
import { password, username } from '../../constants';

async function connectDatabase() {
	const client = await MongoClient.connect(
		`mongodb+srv://${username}:${password}@cluster0.5rv5l.mongodb.net/newsletter?retryWrites=true&w=majority`
	);
	return client;
}

async function insertDocument(client, email) {
	const db = client.db();
	await db.collection('emails').insertOne({ email });
}

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const email = req.body.email;
		console.log(email);

		if (!email) {
			res.status(400).json('Email required');
			return;
		}
		let client;
		try {
			client = await connectDatabase();
		} catch (error) {
			res.status(500).json({ message: 'Connecting to database failed' });
			return;
		}

		try {
			await insertDocument(client, email);
			client.close();
		} catch (error) {
			res.status(500).json({ message: 'Inserting data failed' });
		}

		res.status(200).json({ message: 'Success' });
	}
}

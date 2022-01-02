export default function handler(req, res) {
	if (req.method === 'POST') {
		const email = req.body.email;
		const name = req.body.name;
		const comment = req.body.text;
		const eventId = req.query.eventId;

		if (!email || !name || !comment) {
			res.status(400).json({ error: 'Email, name and comment required' });
			return;
		}

		console.log({ email, name, comment, eventId });
		res.status(201).json({ message: 'Success' });
	}
    else if(req.method === 'GET'){
        res.status(200).json({ comments: []})
    }
}

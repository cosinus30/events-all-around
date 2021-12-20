# Events All Around
## Description
This is an example [Next.js](https://nextjs.org/) project to show how routing and pre-rendering(Static Generation, Server-side Rendering) works in a Next.js application.

As a data source firebase is used. It has only one endpoint `events` which has the data schema like below:
```
{
    e1: {
        title: '',
        description: '',
        location: '',
        date: '',
        address: '',
        image: '',
    },
    ...
}
```

Screens are not optimized for all screen sizes, so it is possible to see some anomalies for screens with little view port.

### How to run
After you clone the project, install all the dependencies with `npm install` command inside the project directory.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
### Routes

- `/` -> Starting Page (Featured events)
- `/events` -> Events Page (All events)
- `/events/[id]` -> Event detail page
- `/events/[...slug]` -> Filtered events


#### Important Note
Since `import { firebaseURL } from "../constants";` is not configured in repo, you need to set this up by creating a realtime database in firebase, and exporting the url in the `constants.js` file in the root directory.
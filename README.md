This is aan example [Next.js](https://nextjs.org/) to show how routing works in a Next.js application. There is basically no data source, all data is consumed from a dummy data source.

Screens are not optimized for all screen sizes, so it is possible to see some anomalies for screens with little view port.

## How to run
After you clone the project, install all the dependencies with `npm install` command inside the project directory.

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Routes

- `/` -> Starting Page (Featured events)
- `/events` -> Events Page (All events)
- `/events/[id]` -> Event detail page
- `/events/...slug` -> Filtered events

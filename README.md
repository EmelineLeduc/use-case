# Technical use-case
This project is a web application designed to display two types of freelancers, referred to as "bloomers": incoming bloomers and outgoing bloomers, based on their mission dates. The project is split into two main parts: the backend, developed with Express.js, and the frontend, developed with React.js.

## Technologies Used
Frontend: React.js
Backend: Express.js
Database: Airtable (optional)

## Features
Bloomers Visualization: The `LeavingArrivingBloomers` component displays incoming and outgoing freelancers based on the current date up to the end of the next month.
Date Filtering: Mission data are filtered to display freelancers based on their arrival (beginDate) and departure (endDate) dates.

## Installation and Execution
### Prerequisites
- Node.js
- npm or yarn
- an Airtable account (for the bonus)

### Backend
1. Navigate to the backend folder: `cd back/`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Frontend
1. Navigate to the frontend folder: `cd front/`
2. Install dependencies: `npm install`
3. Start the application: `npm dev`

## Bonus: Connecting to Airtable
This project uses Airtable as a database to store and manage missions. To integrate Airtable, you need to add your Airtable API key and Base ID as environment variables. Create a `.env` file in the root directory and add the following lines:

```plaintext
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
```

Replace `your_airtable_api_key` and `your_airtable_base_id` with your actual Airtable API key and Base ID.
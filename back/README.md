# Back

This project is a backend service designed to manage and sort missions based on their start and end dates. It provides functionalities to retrieve missions and sort them according to specific criteria.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```sh
npm install
```

## Airtable Integration

This project uses Airtable as a database to store and manage missions. To integrate Airtable, you need to add your Airtable API key and Base ID as environment variables. Create a `.env` file in the root directory and add the following lines:

```plaintext
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
```

Replace `your_airtable_api_key` and `your_airtable_base_id` with your actual Airtable API key and Base ID.

## Running the Project
You can run the project in development mode with live reloading:

```sh
npm start
```

This command concurrently runs TypeScript compiler in watch mode and starts the application using nodemon.

## Testing

This project uses Jest for unit testing. To run the tests, execute the following command:

```sh
npm test
```

## Linting
To ensure code quality and consistency, this project uses ESLint and Prettier. You can check for linting errors by running:

```sh
npm run lint
```

To automatically fix many of the linting errors, use:

```sh
npm run lint:fix
```
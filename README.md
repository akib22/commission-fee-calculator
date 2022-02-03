<h1 align='center'>
    Commission Fee Calculator
</h1>

## Description
A node.js application that will calculate commission fees for transaction operations.


## Technology Stack

- node.js (v16.13.0 LTS)

## Project Configuration & Installation
1. It's better to install minimum node.js (14 LTS) in your system.
2. Clone the repository and run `cd commission-fee-calculator`.
3. Run `npm i` to necessary packages.
4. Run `npm run prepare` to set the husky. (Only for development)
5. Copy the `.sample.env` file and paste it into root in project directory as `.env`.
6. Open the `.env` file and set the `API_BASE_URL`.
7. Run `npm start input.json`. (`input.json` will contain all transactions in JSON format)
## Available Scripts

In the project directory, you can run:

### `npm start input.json`

Runs the app and calculate the commission. This application takes a file as an input which contain transactions in JSON format.

### `npm test`

Launches the test runner.

### `test:watch`

Launches the test runner in the interactive watch mode.

### `npm run lint`

See the eslint warning and error.

### `npm run lint:fix`

To fix eslint warning and error.

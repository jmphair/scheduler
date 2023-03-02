# Interview Scheduler

Using the latest tools and techniques, I built and tested a single page React application that allows users to book and cancel interviews.

Data is persisted by the API server using a PostgreSQL database.

The client application communicates with an API server over HTTP, using the JSON format.

Jest tests are used through the development of the project.

## Technical Specifications

This project is built using:

- React
- Webpack, Babel
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library

The Scheduler client application is created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots

Interview Schedule:

!["Screenshot of schedule page."](https://github.com/jmphair/scheduler/blob/master/docs/appointments.png?raw=true)

Add Appointment:

!["Screenshot of add appointment."](https://github.com/jmphair/scheduler/blob/master/docs/add-appointment.png?raw=true)

Error Handling:

!["Screenshot of error handling."](https://github.com/jmphair/scheduler/blob/master/docs/error-handling.png?raw=true)

Confirmation Message:

!["Screenshot of confirmation message."](https://github.com/jmphair/scheduler/blob/master/docs/confirmation-message.png?raw=true)

## Dependencies

- Axios ^0.20.0
- Classnames ^2.2.6
- Cypress ^9.7.0
- Normalize.css ^8.0.1
- React ^16.9.0
- React-dom ^16.9.0
- React-scripts 3.4.4

## Dev Dependencies

- @babel/core ^7.4.3
- @storybook/addon-actions ^5.0.10
- @storybook/addon-backgrounds ^5.0.10
- @storybook/addon-links ^5.0.10
- @storybook/addons ^5.0.10
- @storybook/react ^5.0.10
- @testing-library/jest-dom ^4.0.0
- @testing-library/react ^8.0.7
- @testing-library/react-hooks ^8.0.1
- Babel-loader 8.1.0
- Prop-types ^15.8.1
- React-test-renderer ^16.9.0
- Sass ^1.53.0

## THANK YOU

I appreciate you taking the time to look at this project.

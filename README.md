# Course List

A ReactJS application for displaying a list of courses.

## Features

* Displays a list of courses with course information (title, description, image)
* Allows users to filter courses by category
* Includes a navigation bar and a filter component
* Uses the React Router for navigation

## Usage

1. Clone the repository to your local machine
2. Install the required dependencies using `npm install` or `yarn install`
3. Start the application using `npm start` or `yarn start`
4. Open the application in a web browser at `http://localhost:3000`

## Code Structure

The code is organized into the following folders:

* `src`: contains the source code for the application
* `src/components`: contains reusable React components
* `src/data`: contains the data for the application (filterData, apiUrl)
* `src/assets`: contains static assets such as images

## Components

The following components are used in the application:

* `App`: the main application component
* `Navbar`: the navigation bar component
* [Filter](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/courseList/src/components/Filter.jsx:2:0-16:1): the filter component
* [Cards](cci:1://file:///c:/Users/HP/OneDrive/Desktop/DotBatchProjects/selfPractice/Reactjs/courseList/src/components/Cards.jsx:3:0-30:1): the component for displaying the list of courses

## Data

The application uses data from the `src/data` folder:

* `filterData`: an array of filter options
* `apiUrl`: the URL for fetching course data

## Dependencies

The application uses the following dependencies:

* `react`: the React library
* `react-router-dom`: for navigation
* `react-toastify`: for displaying toast notifications
* `axios`: for making HTTP requests

## License

This code is licensed under the MIT License.
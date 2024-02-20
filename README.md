# WorldWise App

WorldWise is a React-based application designed to provide users with detailed information about cities around the globe. Leveraging the power of React hooks and context, it offers a dynamic and responsive user experience, allowing users to explore, add, and delete city information in real-time.

![Homepage](/public/screenshot/home.png "home")
![Login](/public/screenshot/login.png "login")
![UI Experience](/public/screenshot/experience.png "UI/UX")

## Technologies Used

React (Hooks, Context)
JavaScript (ES6+)
CSS
HTML
Fetch API for asynchronous requests

### Installation

To run WorldWise locally, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory and run npm install to install dependencies.
Start the development server with npm start.
Open http://localhost:3000 to view it in your browser.

#### Application Structure

## State Management

The app's state is managed using the React useReducer hook and context API, encapsulated in CitiesContext. This approach provides a global state that can be accessed by any component within the app without prop drilling.

initialState
javascript
Copy code
{
cities: [],
isLoading: false,
currentCity: {},
error: "",
}
cities: An array of city objects.
isLoading: Boolean indicating if a request is in progress.
currentCity: Object containing details of the selected city.
error: String containing error message, if any.
Reducer
The reducer function handles actions dispatched to update the state based on the action type.

## Hooks

useCities: A custom hook that provides access to city data and actions to components.

## Actions

loading: Sets isLoading to true.
cities/loaded: Updates the cities array with fetched data and sets isLoading to false.
city/loaded: Sets the currentCity with the fetched city details.
city/created: Adds a new city to the cities array.
city/deleted: Removes a city from the cities array.
rejected: Sets the error with a provided message.

#### Key Functionalities

Fetch Cities
Automatically fetches and displays a list of cities upon initialization.

Add City
Allows users to add a new city through a form. The city is then posted to the backend and added to the global state.

Delete City
Provides the functionality to remove a city from the list, updating the global state accordingly.

Display City Details
On selecting a city, displays detailed information including a generated flag representation based on the city's country code.

Error Handling
Displays error messages to users if any operations fail, improving user experience and debugging ease.

Fake Authentication and Login Functionality
This application includes a mock authentication mechanism to simulate user login and logout workflows without the need for an actual backend service. This approach allows us to develop and test protected routes and user authentication scenarios.

Fake Authentication Context (FakeAuthContext.jsx): This context provides a central point for managing authentication state throughout the application. It utilizes React's Context API and the useReducer hook to handle authentication states (isAuthenticated and user) and actions (login and logout).

Login Functionality: The login process is simulated by comparing the entered credentials against a hardcoded user object (FAKE_USER). If the credentials match, the authentication state is updated to reflect that a user is logged in. This is achieved by dispatching a login action, which updates the user and isAuthenticated state.

Logout Functionality: The logout process is straightforward, resetting the authentication state. Dispatching a logout action sets the user state to null and isAuthenticated to false, effectively logging the user out.

FAKE_USER: A predefined user object that includes basic information such as name, email, and a mock avatar URL. This object is used to validate login attempts.

Reducer Function: Handles actions related to authentication, updating the application's state based on the action type (login or logout).

login and logout Functions: These functions dispatch actions to update the application's state to reflect the user's authentication status.

#### Protected Routes

Protected routes ensure that certain parts of the application are accessible only to authenticated users. This is implemented using a ProtectedRoute component that wraps around any routes that require authentication.

How It Works
The ProtectedRoute component checks the authentication state (isAuthenticated). If the user is not authenticated, it redirects them to the login page. Otherwise, it renders the child components, allowing the user access to the protected content.

This mechanism is crucial for creating a secure user experience, preventing unauthorized access to certain areas of the application.

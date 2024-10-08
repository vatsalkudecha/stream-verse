# Stream-Verse

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign Up
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement SignIn User API
- Created Redux Store with userSlice
- Implemented SignOut
- Update profile api call
- BugFix: SignUp user displayName and profile picture update
- BugFix: If the user is not signed in - Redirect to ("/browse") to Login("/") page 
    and if LoggedIn - Redirect to ("/") to ("/browse") page
- Unsubscribe to the onAuthStateChanged callback when component unmounts
- Added Constants
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Added CUSTOM nowPlayingMovies Hook to our movies store
- Create movieSlice
- Added MovieBackgroundVideo & MovieTitle page
- Fetch Trailer Video and updating the store with trailer video data
- Embedded the Youtube video and make it autoplay & mute
- Update the background video container
- Build Secondary component
- Build Movie List
- Build Movie Card
- Fetch Popular Movies from TMDB API and usePopularMovies Hook
- Fetch Top_Rated & Upcoming Movies from TMDB API and store the results in store using useTopRatedMovies and useUpcomingMovies Hook
- GPT Search Page
- GPT Search Bar
- Added Multi language feature on GPT Page
- Added GPT Search results Movies and TMDB Search results in the gpt Slice
- Put the gpt Searched movies in the Moviecard
- Securing the APIs 
- Memoize the upcomingMovies, topRatedMovies, popularMovies, nowPlayingMovies and trailerVideo

## Features

- Login/Sign Up
    - Sign In/Sign Up Form
    - Redirect to Browse Page

- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - MovieLists * N

- StreamVerseGPT
    - Search Bar
    - Movie Suggestions


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

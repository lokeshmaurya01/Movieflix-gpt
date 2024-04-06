## MOVIEFLIX-GPT

- (https://movieflixgpt-935cb-f6b80.firebase.web.app/) checkout the link for Live deployment of APP

# What's done till now

- create react app Folder and file structure using create-react-app
- configured tailwind CSS
- Created remote Github repo
- Routing of App
- Header
- Login/SignUp Form
- _Form Validation_ and usage of _'useRef' Hook_
- Firebase Setup
- Deploying App to production
- Create Sign Up User Account in Firebase
- Implement Sign in User Api in Firebase
- Created redux store with userSlice
- Routing to Browse page after succesfull Sign In and Sign Up(i.e Secured Routing)
- Implemented SignOut feature and updateProfile API call to update user every time Signin /Signout occur
- Update profile(Name,email,Avatar) So that we can use it when user is logged in
- Bug Fix:- when user is not logged in and tries to access "/browse" page it redirects him again to "/" or login page and Vice-versa
- Unsubscribing onAuthStateChanged() callback everytime component will unmount.
- Added hardcoded values to "constant.js" to make code more readable and maintainable also,to increase reusability.
- Registered for TMDB API to get ACCESS TOKEN
- GET data from TMDB Movie List's now playing API
- Custom Hook for Now Playing Movies
- Create Movie-Slice in redux store for movies-list data
- Updated store Movie data
- Planning for Main-Conatiner and Secondary Container\
- Fetch data for Trailer Video , and Update store for Traile data
- Embedded youtube video trailer of Movie trailer and made it background autoplaying video/Styled it with tailwind

# Features of MOVIEFLIX-GPT:

- **Sign Up/ Sign In**
  - Login /Signup form
  - Redirect to Browse page
- **Browse(After Authentication)**
  - Header
  - Main Movie
    - Trailer in background
    - Title and description
    - Movie Suggestion
      - MovieList \* N (horizontally)
- **GPT powered Search**
  - Search bar
  - Movie suggestion based on prompt given in search bar

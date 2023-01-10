
# Instagram Clone Fullstack App

## Project Description

This project is designed to emulate the web version of the Instagram app, albeit a simplified version that retains that main functionality of the app the users of Instagram are used to. It features a custom frontend and backend written by me and the technology stack used is listed below.

### Technologies used

#### Frontend
* React
* Typescript
* TailwindCSS
* Axios

#### Backend
* Node.js
* Express.js
* MongoDB (Mongoose)
* Multer
* Cloudinary
* Json Web Tokens
* WebSockets

## Project Goals

The goal of this project is to showcase my skills as a self-taught full stack developer primarily using the MERN stack. Not only was my goal to create a frontend that looked similar to what is available on Instagram with a responsive design, but also a backend that features almost full functionality that you would expect.

## Features

* User login and registration with authorization and automatic redirect
* Customizeable profile details including full name, username, bio and website
* Post photos that display on a homefeed as well as the users respective profile for all users
* Direct message other users that you are following with a live messaging service
* Search up other users by name or username in a pop-up search bar that redirects to their profile on click
* Follow and unfollow other users, as well as see a list of followers/following on click
* Interact with other user posts with likes and comments that display for everyone
* Ability to delete and edit caption on any of your own posts
* Conditionally rendered components for your own profile, for following/unfollowing users, whether or not you liked a post and more.


## Setup

You will need MongoDB and Cloudinary accounts (free) to use this application. I have left .env template files in the application that you can use to fill in with your own details for this.

After cloning the repo and project is open you need to start the backend and frontend (located in different folders). Run a separate terminal for each.

### Starting the backend

`cd backend`

then

`nodemon app.js`

### Starting the frontend

`cd frontend`

then

`npm start`

That's it, your project should be running! If your token expires, you may need to clear localhost cache and refresh the page to see changes reflected


## Project Status

This project is still a Work-in-Progress, although the majority of the planned features have been completed, with more on the way.


### Other planned features:

* Forgot password/password reset feature
* Notification stream in navbar that shows when and who commented/liked your posts, as well as followed you.
* Replies to comments

### Bugs:

* Live chat is still very buggy and something I will need to fix.



Thank you for checking out my project!





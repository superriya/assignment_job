# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About Development

The project featches data from API providing jobs information in ListJob.js file. 

I used fetch method to call API and The Fetch API returns a Promise, so you need to wait for the promise to resolve by using .then() after it.

The Fetch API initially return a Response object, which will tell you the status code of the response among other details

We need to run the .json() method on the response object to turn the response into more useful data. The .json() method will also return a promise, so we need to chain another .then() onto it.

When using the Fetch API, it won't automatically throw all errors. You have to manually check to see if the response object has an "ok" property on it, and throw an error if it's not. This will help you catch things like a 404 error with the response.

Since the data we get back is an array, we can perform .map() on the array to loop over the data. 
In order to render our data to the screen, we can use JSX Template.

Further to filter jobs containing string as typed in search box, we are using filter on the array. The search string is captured with help of useState hook of react. Hence the component displays only filtered data.

To allow user to mark job as favourite, we have favourite icon wrapped in button element, this button triggers arrow function onClick to invert the state value for the specific job. Hence while user clicks button the state changes from true to false OR false/null to true. The color of icon will be red while user mark some job as favourite.

While page loads for first time, all of job ids will have null value for favourite in localStorage. Whenever user clicks on button to change the favourite status, the change in state of useState hook invokes useEffect hook where the changes will be written to localStorage. So that next time page refreshes the job favourite status will be fetched by useState hook from localStorage, if the favourite status is true the icon will be Red otherwise Gray in color.


## code not working in safari browser due to access control checks.(CORS)
I'm trying to resolve that issue.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About Development

The project featches data from API providing jobs information in jobs.js file. The data available in object. To apply iterations on the object as we do in case of array is done with help of ```Object.values(data).map``` loop. This consumes values from object as of array & applies map function on it.

Further to filter jobs containing string as typed in search box, we are using filter on the array. The search string is captured with help of useState hook of react. Hence the component displays only filtered data.

To allow user to mark job as favourite, we have favourite icon wrapped in button element, this button triggers arrow function onClick to invert the state value for the specific job. Hence while user clicks button the state changes from true to false OR false/null to true. The color of icon will be red while user mark some job as favourite.

While page loads for first time, all of job ids will have null value for favourite in localStorage. Whenever user clicks on button to change the favourite status, the change in state of useState hook invokes useEffect hook where the changes will be written to localStorage. So that next time page refreshes the job favourite status will be fetched by useState hook from localStorage, if the favourite status is true the icon will be Red otherwise Gray in color.


## code not working in safari browser due to access control checks.(CORS)
I'm trying to resolve that issue.
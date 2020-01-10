## Vizolution Ltd Exercise

Please find below all the information necessary to complete the technical exercise required by Vizolution for the position of Front End React or Full Stack React developer.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to get you up and running quickly, but you are free to change things if you like.

### Rules

- You should spend no more than 5 hours on this exercise. We do not expect it to be perfect. 
- You will have time during the face-to-face interview to explain how you would have progressed things further given the opportunity and time.
- You are free to use an AJAX library for fetching data.
- The code should work in Chrome and IE10 (we can accept small bugs, but overall it should work).
- We have included a ```weathericons``` font and corresponding CSS file to help you with displaying icons in your app. There is an example of how to implement a font icon in ```App.js```.
- You will find sample images in the public folder to give you an idea of how your app could look. You are free to use a different design if you wish.
- You can use the following API key: **9cc2d877f47949e2fd131a35b7386286**. This is a free key that allows a maximum of 60 request per hour. You can register more free accounts on the following url if needed: https://openweathermap.org/appid.
- When you have finished the exercise, please send the project back in a zip folder (*without the node_modules folder*) by email.
- The face to face interview will be based on this exercise, so please make sure it is your own work.

### The Exercise

Create a single page application that displays the current weather,  using the free weather API provided by openweathermap.org.

To get the weather for Swansea, you can make the following requests:

**Current weather**: http://api.openweathermap.org/data/2.5/weather?q=swansea&APPID=9cc2d877f47949e2fd131a35b7386286

**3 days forecast**: http://api.openweathermap.org/data/2.5/forecast?q=swansea&APPID=9cc2d877f47949e2fd131a35b7386286

### Minimum Requirement

- Display the current weather in Swansea 
- Allow the user to change the current weather to London, Rome, New York, Toronto, Berlin or Dubai

### Complete at least two of the following:

- Make design responsive
- Make design accessible to both visual and non-visual users
- Create unit tests
- Use a CSS Preprocessor (e.g. Sass) or Styled Components
- Allow the user to add new cities
- Allow the user to toggle between daily and 3 day weather forecasts
- Allow the selected city to be remembered on page refresh

### Getting started

Run the following commands in the root of the project (requires an installation of NodeJs):

```
npm install
```

Followed by:

```
npm start
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

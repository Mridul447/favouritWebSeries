# See Live - [Here](https://abhinandanmishra1.github.io/favourite-movies-series/)
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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


$ git init
$ git add .
$ git commit -m "add: initialCommit"
$ git remote add origin https://github.com/abhinandanmishra1/favourite-movies-series.git
$ git push origin master

If you’ve already developed a React app, follow the next set of instructions. Before that, make sure your React app code is already pushed to your GitHub account.

For the first step, install the gh-pages package as a dev-dependency of the React app.
npm install gh-pages --save-dev

For the second step, open the package.json in your React application and add the homepage property.
Define homepage’s value to be the string http://{username}.github.io/{repo-name}, where username is your GitHub username, and {repo-name} is the name of the GitHub repository.
Since my GitHub username is “sabesansathananthan” and the name of my GitHub repository is “React-Deploy”, I added the property as mentioned below:
“homepage”: “http://abhinandanmishra1.github.io/favourite-movies-series"


For the third step, add the deploy script commands in your project’s package.json file.
In the package.json file, add the predeploy property and the deploy property with the existing scripts property. Your package.json scripts should like this:


"scripts": { 
 "start": "react-scripts start",
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
 "build": "react-scripts build",
 "test": "react-scripts test",
 "eject": "react-scripts eject"
},


The predeploy script initiates after running our deploy script, which bundles our application for deployment.
Now, deploy your application to GitHub Pages. For that, run the following commands in the integrated PowerShell/terminal in VS Code.

npm run deploy

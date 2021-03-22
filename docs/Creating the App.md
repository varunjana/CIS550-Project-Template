# Creating the App

# Creating the client:
Make a new react application (client-side application)

```
npx create-react-app client 
 ```

To run this,

``` 
cd client 
npm start
```

This makes the the client run on localhost:3000.

Install Routing dependencies:

```
npm install react-router-dom
```

Change directory structure to route from index.js and bypass App.js.
Modify the tests file.
Install Shards React

```
npm install shards-react
```

Font Awesome icons:


``` 
npm install --save @fortawesome/fontawesome-free
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome 
  ```

... and Ant Design 

```
npm install antd
```

Make directories in `src`: one for `components` and another for `pages` 

Make the Home and About pages with a TopNavBar component, add to router.

Add Travis integration to run client/server tests as needed and build, creating the ```travis.yaml``` accordingly.

Add a fetcher for the client side, and add the line 

```
"proxy": "http://localhost:4001"
```
 to ```package.json``` in this client app. 

 Change the title and the favicon in the public directory



# Creating the Server
At the root of the project, make a ```server``` directory:

```
npm  init
```
(Set options as needed)

```
npm install express cors --save
```

Add babel and nodemon (you will need to run the terminal with administrator access)
```
npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev
```

Add the folowing start script to the ```scripts``` congifuration in ```server/package.json```:

```
"start": "nodemon --exec babel-node server.js"
```

Make the server app in ```server.js``` and set the port as below 
```
const PORT = process.env.HTTP_PORT || 8081
```  

Register a demo route at "/" for testing

Create a ```movie_routes.js``` file, and add the "/movies" route to it
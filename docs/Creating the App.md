# Creating the App

# Creating the client:
Make a new react application (client-side application)

``` npx create-react-app client ```

To run this,

``` cd client ```
``` npm start ```

This makes the the client run on localhost:3000.

Install Routing dependencies:

```react-router-dom```

Install Shards React

```npm install shards-react```

fontawesome icons:


``` 
npm install --save @fortawesome/fontawesome-free
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome 
  ```

... and Ant Design 

```npm install antd```

Make directories in `src`: one for `components` and another for `pages` 




# Creating the Server
At the root of the project, make a ```server``` directory:

```npm  init```
(Set options as needed)

```npm install express cors --save```

Add babel and nodemon (you will need to run the terminal with administrator access)
```npm install @babel/cli @babel/core @babel/node @babel/preset-env nodemon --save-dev```

Add the folowing start script to the ```scripts``` congifuration in ```server/package.json```:

```"start": "nodemon --exec babel-node server.js"```
## Vue.js Node ES6 Fullstack Sample

Set up based on [article by Jay Gould](https://www.jaygould.co.uk/devops/2017/11/14/cloud-deployment-heroku-node-babel.html).

Note: Some new conventions introduced in 2018-2019.

* Add to package.json:
```
  "engines": {
    "node": "10.15.3",
    "npm":"6.9.0"
  },
    "engines": {
    "node": "10.15.3",
    "npm":"6.9.0"
  },
  
  ...

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js --exec npx babel-node",
    "heroku-postbuild": "npm install",
    "start": "npx babel-node server.js"
  },
    "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "nodemon": "^1.19.0"
  }
```

* Run command before pushing up:
```
heroku config:set NPM_CONFIG_PRODUCTION=false
```

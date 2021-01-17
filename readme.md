program remind

1. add app.js

2. inside package.json
```    
{
  ...
  "scripts": {
    "start": "nodemon --inspect -e js,html,hbs,sql,css,scss app.js"
  }
  ...
}

to run type "npm start"
```

3. install env variable
```$ npm install dotenv --save-dev```
```
    //.env

    PORT=3000
```
4. add dir intialisers
    - add http.js 

5. add dir lib
    - add responder.js

6. add dir config
    - add constants.js
      -add static extensions
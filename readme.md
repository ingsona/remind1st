program remind

1. add app.js

2. //package.json
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

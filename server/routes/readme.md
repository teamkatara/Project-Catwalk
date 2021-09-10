# TODO: Make New File for Your Widgets Routes

## After Making the file make sure to import the router and export at end of file

```javascript
   var router = require('express').Router();

   router.get('/yourWidgetHere', (req, res) => {
    res.end('do stuff here before returning response');
   });

   module.exports = router;
```

## Import the route you have made to the main server index.js - example provided below

```javascript
  var router = require('./routes/test.js');
  // this will set your routes at localhost:3000
  app.use('/', router); // your route would look like localhost:3000/yourWidgetHere
```

'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./public'));

app.get('*', function(req, res){
  res.sendFile('index.html', {root: './public/'});
});

app.listen(PORT, () => console.log(`Served on port: ${PORT}`));

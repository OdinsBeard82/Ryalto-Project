const express = require('express');
const app = express();
const port = 3000; // You can change this to any available port you prefer

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const app     = express();
const PORT    = process.env.PORT || 3003;

app.use(express.static('public'));

app.listen(PORT, () => console.log("Trump is a racist on Port: ", PORT));

const express = require('express');
const cors = require('cors');
const fileRoute = require('./routes/file');
require('./db/db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(fileRoute);

app.listen(port, () => {
    console.log(`server is started on port: ${port}`);
});
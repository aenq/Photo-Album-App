const express = require('express');
const app = express();
const router = require('./router/index');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'pug');
app.use(router);

const port = 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});

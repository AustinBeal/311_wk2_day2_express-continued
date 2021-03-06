const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static('public'));

app.use(bodyParser.json());

app.use(require("./routes/comments.js"));

app.use(require("./routes/contacts.js"));

app.use(require("./routes/products.js"));

app.use(require("./routes/vehicles.js"));





const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

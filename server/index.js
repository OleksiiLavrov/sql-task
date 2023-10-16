const express = require("express");
const router = require("./routes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8080;

app.use(
   cors({
      origin: "http://localhost:5173",
   })
);
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

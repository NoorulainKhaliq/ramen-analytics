const express = require("express");
const app = express();
const path = require("path");
const { resolve } = require("path");

app
  .use(express.static(path.join(__dirname, "..", "public")))
  .use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

app
  .use("/api", require("./api"))
  .get("/*", (_, res) =>
    res.sendFile(resolve(__dirname, "..", "public", "index.html"))
  );

//starts the server
app.listen(3000, (req, res, next) => {
  console.log("listening on port 3000");
});

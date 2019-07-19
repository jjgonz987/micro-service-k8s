const app = require("./src/app");

var port = process.env.port || 5000

app.listen(port, () => {
    console.log("running on " + port);
    console.log("--------------------------");
  });
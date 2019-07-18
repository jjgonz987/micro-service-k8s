const app = require("./src/app");

var port = process.env.port || 3000

app.listen(port, () => {
    console.log("running on " + port);
    console.log("--------------------------");
  });
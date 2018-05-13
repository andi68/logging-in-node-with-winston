const app = require("./src/app");
const logger = require("./src/lib/logger");

const port = process.env.NODE_PORT || 3000
app.listen(port, function () {
  logger.info('Example app listening on port ' + port);
});

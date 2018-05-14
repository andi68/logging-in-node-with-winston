const express = require("express");
const app = express();
const logger = require("./lib/logger");

// console.log(process.env);

app.get("/", (req, res) => {
  logger.info("/ query", { query: req.query });

  const foundUser = {'username':'andi68'};
  logger.debug("User found", foundUser );
  logger.debug("foundUsername", foundUser.username );
 
  const msg = {
    username: foundUser && foundUser.username,
    foundUser: !!foundUser
  };
  logger.info("/ response", msg);
  res.json(msg);
});


module.exports = app;

const winston = require('winston');
//const path = require('path');
const Mask = require('./mask');
const MESSAGE = Symbol.for('message');
const moment = require('moment');

// create formatter for dates used as timestamps
const tsFormat = () => moment().format('YYYY-MM-DD hh:mm:ss').trim();

// define a logger with 2 transports - console and a file
// const logger = new (winston.Logger)({
//   transports: [
//     // colorize the output to the console
//     new (winston.transports.Console)({
//     	timestamp: tsFormat,
//     	colorize: true
//     }),
//     new winston.transports.File({
//     	filename: './logs/ttracker.log',
//     	timestamp: tsFormat,			// makes timestamp 'pretty'
//     	json: false					// makes log format just like console output
// 	})
//   ]
// });

// https://github.com/winstonjs/winston/tree/2.x

const jsonFormatter = (logEntry) => {
  const base = { timestamp: new Date() };
  const json = Object.assign(base, logEntry)
  logEntry[MESSAGE] = JSON.stringify(json);
  return logEntry;
}

const level = process.env.NODE_LOGGING_LEVEL || 'info';
const filename = process.env.NODE_LOGGING_FILENAME || __dirname + '/../../app-logs.log';
console.log("Logging level: " + level);

const logger = new (winston.Logger)({
    level: level,
    //format: winston.format(jsonFormatter)(),

    // format: format.combine(
    //     format.label({ label: '[my-label]' }),
    //     format.timestamp({
    //       format: 'YYYY-MM-DD HH:mm:ss'
    //     }),

    transports: [
      new (winston.transports.Console)(),
      new (winston.transports.File)({ filename: filename })
    ]
  });

//module.exports = new Mask(logger);
module.exports = logger;
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes");
const cors = require("cors")
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(express.json());
server.use(helmet());

server.use(morgan("dev"));
server.use(cookieParser());
server.use(cors({origin:"http://localhost:3000"}))
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


server.use("/api", routes);

module.exports = server;

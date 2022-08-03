const net = require("net"); 
const {IP, PORT, name} = require("./constant");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected");
    conn.write(`Name: ${name}`);
  });

  conn.setEncoding("utf8");
  return conn;
};

module.exports = {connect};
const net = require("net"); 

const connect = function () {
  const conn = net.createConnection({
    host:'165.227.47.243',
    port:50541,
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected");
    conn.write("Name: D.S");
  });

  conn.setEncoding("utf8");
  return conn;
};

module.exports = {connect};
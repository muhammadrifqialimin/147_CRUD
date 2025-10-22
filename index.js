const express = require("express");
let mysql = require("mysql2");
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: "3309",
  password: "Rifqy2004_",
  database: "mahasiswa",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database.");
});

app.get("/api/mahasiswa", (req, res) => {
  const sql = "SELECT * FROM biodata";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query:" + err.stack);
      res.status(500).send("Error fetching mahasiswa");
      return;
    }
    res.json(results);
  });
});

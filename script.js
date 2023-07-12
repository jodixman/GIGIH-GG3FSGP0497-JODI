const express = require("express");
const app = express();
const port = 3000;

const mahasiswa = [
  {
    nama: "budi",
    umur: "20",
  },
  {
    nama: "joko",
    umur: "21",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/mahasiswa", (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.send(mahasiswa);
});

app.get("/:nama", (req, res) => {
  res.send(`Hallo nama saya ${req.params.nama}`);
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
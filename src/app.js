const express = require("express");
const app = express();
const { Musician } = require("../models/index");
const { db } = require("../db/connection");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians
app.get("/musicians", async (req, res) => {
  const allMusicians = await Musician.findAll();
  res.send(allMusicians);
});

app.get("/musician/:id", async (req, res) => {
  const id = req.params.id;

  const musician = await Musician.findByPk(id);
  res.json(musician);
});

app.post("/musician", async (req, res) => {
  const { name, genre, instrument } = req.body;

  await Musician.create({ name: name, instrument: instrument });

  res.send("Successful");
});

app.put("/musician/:id", async (req, res) => {
  const id = req.params.id;
  const { name, genre, instrument } = req.body;

  const musician = await Musician.findByPk(id);

  await musician.update({ name: name, instrument: instrument });

  res.send("Successful");
});

app.delete("/musician/:id", async (req, res) => {
  const id = req.params.id;

  const musician = await Musician.findByPk(Number(id));

  await musician.destroy();

  res.send("Successful");
});

module.exports = app;

const addDays = require("date-fns/addDays");

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const daysFromToday = addDays(new Date(), 100);
  response.send(
    `${daysFromToday.getDate()}/${
      daysFromToday.getMonth() + 1
    }/${daysFromToday.getFullYear()}`
  );
});

module.exports = app;

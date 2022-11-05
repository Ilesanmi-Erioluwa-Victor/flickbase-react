const express = require("express");
const router = express.Router();

const routesIndex = [
  {
    path: "/auth",
    route: "",
  },
];

routesIndex.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = { router };

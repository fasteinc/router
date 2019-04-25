const express = require('express');

module.exports = class RouterServer {
  constructor(project) {
    const router = express.Router()
      Object.keys(project.routes).map(routeName => {
        router.get(project.routes[routeName].url, (req, res, next) => {
          res.send({
            current: {
              name: routeName,
              params: req.params,
              query: req.query,
              project: project,
              ...project.routes[routeName]
            },
          })
        })
      });
    return router
  }
}

const path = require("path");
const mongoose = require('mongoose');

let ProductController = require("../controllers/ProductController.js");

module.exports = function(app) {
  app.get("/api/products", ProductController.display_all);
  app.post("/api/products", ProductController.create);
  app.get("/api/products/:id", ProductController.find_product);
  app.delete("/api/products/:id", ProductController.delete);
  app.put("/api/products/:id", ProductController.update);

  // app.post("/api/reviews/:id/review", ReviewController.create);
  // app.post("/api/movies/:id/review", ReviewController.create);
  //
  // app.get("/api/reviews/:id",ReviewController.find);



  // if we dont hit ay of our backend routes, serve our Angular App
  app.all("*", (req, res, next)=> {
    res.sendFile(path.resolve("./client/public/dist/public/index.html"));
  });
}

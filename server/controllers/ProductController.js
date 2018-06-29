// Require our database and use our Product Model
const Product = require('mongoose').model('Product');

class ProductController {

// ------- display_all METHOD ------------------ //

  display_all(req, res) {
    Product.find( {}, (err, products)=> {
      if(products) {
        console.log("Found: ", products)
        // return all tasks as JSON OBJECTS
        return res.json(products);
			} else {
				return res.json( {
          "error":err,
          "message":"Could not find all products!",
        });
			}
    });
  }

// ------- findById METHOD ------------------ //

// findById(req, res) {
find_product(req, res) {

// console.log("POST DATA: ", req.params);
  Product.findOne( {_id:req.params.id}, (err, product)=> {
    if(product) {
      // console.log("Found: ", product);
      return res.json(product);
    } else {
      // console.log("Product not found", err);
      return res.json({
        "error":err,
        "message":"Failed to find Product with id:"+req.params.id
      });
    }
  });
}

// ------- create METHOD ------------------ //

  create(req, res) {
    let product = new Product(req.body);
    // console.log("POST DATA: ", req.body);
    product.save(err=> {
      if(err) {
        // console.log("Something went wrong", err);
        return res.json({
          "error":err.errors,
          "message":"Failed to create Product"
        });
      } else {
        console.log("Product created successfully");
        return res.json(product);
      }
    });
  }


// ------- update METHOD ------------------ //

  update(req, res) {

    console.log("hit update route");
    Product.findOne({_id: req.params.id}, (err, product)=> {
      if(product){
        // if the field was updated, update it. If not changed, save what we had before
        product.name = req.body.name || product.name;
        product.quantity = req.body.quantity || product.quantity;
        product.price = req.body.price || product.price;

        product.save( err=> {
          if(err) {
            console.log("Product did not save", err);
            return res.json({
              "error":err.errors,
              "message":"Failed to update Product" + req.params.id
            });
          } else {
            console.log("Product updated successfully");
            return res.json(product);
          }
        });

      } else {
        console.log("Something went sideways", err);
        return res.json({
          "error":err,
          "message":"Failed to find Product" + req.params.id
        });
      }

    });
  }


// ------- destroy METHOD ------------------ //

  delete(req, res) {
    console.log("hit distroy route");
    Product.findOne({_id: req.params.id}, (err, product)=> {
      if(product){
        Product.remove( {_id:req.params.id}, function(err) {
          console.log("Found: ", product);

          if(err) {
            console.log("Something went sideways", err);
            return res.json({
              "error":err,
              "message":"Failed to remove Product" + req.params.id
            });
          } else {
            return res.json(product);
          }
        });

      } else {
        return res.json({
          "error":err,
          "message":"Failed to find Product" + req.params.id
        });
      }
    });
  }


}  //------  end of ProductController()

// export our ProductController()
module.exports = new ProductController();

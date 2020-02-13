const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    show: function(req, res){
        Product.find({}, function(err, data){
            if(err){
                res.json({message: 'sorry error', error: err})
            }
            else{
                res.json({message: 'succesfull', products: data})
            }
        })
    },

    create: function(req, res){
        Product.find({name: req.body.name}, function(err, products){
            if(products.length == 0){
                let new_product = new Product();
                new_product.name = req.body.name,
                new_product.quantity = req.body.quantity,
                new_product.price = req.body.price
                new_product.save(function(err){
                    if(err){
                        res.json({message: 'sorry error', error: err})
                    }
                    else{
                        res.json({message: `its added to  ${new_product.name} to db`})
                    }
                })
            }
            else{
                res.json({message: 'it already exists'})
            }
        })
    },

    update: function(req, res){
        Product.update({_id: req.params.id}, {
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price
        }, {runValidators: true}, function(err, products){
            if(err){
                res.json({message: 'sorry error', error: err})
            }
            else{
                res.json({message: 'succesful updated', data: products})
            }
        })
    },

    delete: function(req, res){
        Product.remove({_id: req.params.id}, function(err, products){
            if(err){
                res.json({message: 'sorry error', error: err})
            }
            else{
                res.json({message: 'product deleted', data: products})
            }
        })
    },

    showOne: function(req, res){
        Product.findOne({_id: req.params.id}, function(err, products){
            if(err){
                res.json({message: 'sorry error', error: err})
            }
            else{
                res.json({message: 'succesfull', data: products})
            }
        })
    }
}
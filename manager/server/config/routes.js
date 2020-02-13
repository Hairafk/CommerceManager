const path = require('path');
const products = require('../controllers/products.js');

module.exports = function(app){
    app.get('/products', function(req, res){  
        products.show(req, res)
    })
    app.post('/products', function(req, res){
        products.create(req, res)
    })
    app.get('/products/:id', function(req, res){
        products.showOne(req, res)
    })
    app.delete('/products/:id', function(req, res){
        products.delete(req, res)
    })
    app.put('/products/:id', function(req, res){ 
        products.update(req, res)
    })
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angular-app/dist/angular-app/index.html"))
})
}
const express=require('express');
const routes=express.Router();
const {renderHome,getAllProducts,getForm,addnewProduct}=require("../controllers/tiendaControllers");

routes.get('/',renderHome);
routes.get("/productos",getAllProducts);
routes.get("/nuevoProducto",getForm);
routes.post("/nuevoProducto",addnewProduct);

module.exports = routes;
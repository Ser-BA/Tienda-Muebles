const databaseConnection=require("../../config/dataBase");

const renderHome=(req, res)=>{

    databaseConnection.query("SELECT * FROM categorias",(error,info)=>{
            if (error) {
                console.log(error);
            } else {
                 res.render('pages/index.ejs',{data:info});
            }
    });
   
};

const getAllProducts=(req, res)=>{

    databaseConnection.query("SELECT * FROM productos",(error,data)=>{
        if (error) {
            console.log(error);
        } else {
             res.render('pages/productos.ejs',{data:data});
        }
    });
   
};

const getForm=(req, res)=>{

     res.render('pages/formulario.ejs');
    
};

const addnewProduct=(req, res)=>{
    const {producto,categoria,descripcion,precio}= req.body;
    
    /*databaseConnection.query('INSERT INTO productos(producto,categoria,imagen,descripcion,precio)VALUES("silla-madera","sillas","/imagenes/estilo-madera.png","una breve descripcion del producto",1000)',(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.send("Recibido!")
        }
    });*/

    databaseConnection.query('INSERT INTO productos(producto,categoria,imagen,descripcion,precio)VALUES(?,?,"/imagenes/estilo-madera.png",?,?)',[producto,categoria,descripcion,precio],(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/productos")
        }
    });
   

};

module.exports = {
    renderHome,
    getAllProducts,
    getForm,
    addnewProduct
};
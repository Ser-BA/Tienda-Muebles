const express= require('express');
const app = express();
const routes = require('./routes/tiendaRoutes');
const path= require('path');
const databaseConnection = require('../config/dataBase');
const port= process.env.PORT || 4000;

databaseConnection.connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('views',path.join(__dirname,'views'));
app.set('views engine',"ejs");
app.use(express.static(path.join(__dirname,'public')));

app.use("",routes);

app.listen(port,() => {
    console.log('listening on port '+ port)
});

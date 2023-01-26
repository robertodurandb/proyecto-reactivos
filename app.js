const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const Dotenv = require('dotenv')

const { AreaController } = require('./controllers/areacontroller')
const { UserController } = require('./controllers/usercontroller')
const { ExamenController } = require('./controllers/examencontroller')
const { ProveedorController } = require('./controllers/proveedorcontroller')

const jwtMiddleware = require('./middlewares/jwt')

Dotenv.config();

const app = express()

app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}
//middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//rutas********************************

app.post('/login', UserController.login);

app.get('/usuarios', UserController.list);
app.get('/usuario/:id',UserController.retrieve);
app.post('/usuario', jwtMiddleware, UserController.create);
app.delete('/usuario/:id', jwtMiddleware, UserController.delete);
app.put('/usuario/:id',jwtMiddleware, UserController.update);

app.get('/examenes', ExamenController.list);
app.get('/examen/:id', ExamenController.retrieve);
app.post('/examen', jwtMiddleware, ExamenController.create);
app.delete('/examen/:id', jwtMiddleware, ExamenController.delete);
app.put('/examen/:id', jwtMiddleware, ExamenController.update);

app.get('/areas', AreaController.list);
app.get('/area/:id', AreaController.retrieve);
app.post('/area', jwtMiddleware, AreaController.create);
app.delete('/area/:id', jwtMiddleware, AreaController.delete);
app.put('/area/:id', jwtMiddleware, AreaController.update);
app.get('/area/:id/examenes', AreaController.retrieve_by_area);

app.get('/proveedores', ProveedorController.list);
app.get('/proveedor/:id', ProveedorController.retrieve);
app.post('/proveedor', jwtMiddleware, ProveedorController.create);
app.delete('/proveedor/:id', jwtMiddleware, ProveedorController.delete);
app.put('/proveedor/:id', jwtMiddleware, ProveedorController.update);
app.get('/proveedor/:id/examenes', ProveedorController.retrieve_by_proveedor);

app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})

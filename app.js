const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const Dotenv = require('dotenv')

const { AreaController } = require('./controllers/areacontroller')
const { UserController } = require('./controllers/usercontroller')
const { ExamenController } = require('./controllers/examencontroller')
const { ProveedorController } = require('./controllers/proveedorcontroller')
const { ProveedorExamenController } = require('./controllers/proveedor_examencontroller')
const { PerfilController } = require('./controllers/perfilcontroller')
const { PerfilExamenController } = require('./controllers/perfil_examencontroller')
const { EstadoController } = require('./controllers/estadocontroller')
const { RegistroController } = require('./controllers/registrocontroller')
const { RegistroDetalleController } = require('./controllers/registrodetallecontroller')

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
app.put('/usuario/:id', jwtMiddleware, UserController.update);

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

app.get('/examen_proveedor', ProveedorExamenController.list);
app.get('/examen_proveedor/:id/:id',ProveedorExamenController.retrieve);
app.post('/examen_proveedor', jwtMiddleware, ProveedorExamenController.create);
app.delete('/examen_proveedor/:id/:id', jwtMiddleware, ProveedorExamenController.delete);
app.put('/examen_proveedor/:id/:id',jwtMiddleware, ProveedorExamenController.update);

app.get('/perfiles', PerfilController.list);
app.get('/perfil/:id', PerfilController.retrieve);
app.post('/perfil', jwtMiddleware, PerfilController.create);
app.delete('/perfil/:id', jwtMiddleware, PerfilController.delete);
app.put('/perfil/:id', jwtMiddleware, PerfilController.update);

app.get('/examen_perfil', PerfilExamenController.list);
app.get('/examen_perfil/:id/:id',PerfilExamenController.retrieve);
app.post('/examen_perfil', jwtMiddleware, PerfilExamenController.create);
app.delete('/examen_perfil/:id/:id', jwtMiddleware, PerfilExamenController.delete);
app.put('/examen_perfil/:id/:id',jwtMiddleware, PerfilExamenController.update);

app.get('/estados', EstadoController.list);

app.get('/registros', RegistroController.list);
app.get('/registro/:id/',RegistroController.retrieve);
app.post('/registro', jwtMiddleware, RegistroController.create);
app.delete('/registro/:id/', jwtMiddleware, RegistroController.delete);
app.put('/registro/:id/',jwtMiddleware, RegistroController.update);

app.get('/registro_details', RegistroDetalleController.list);
app.get('/registro_detail/:id/',RegistroDetalleController.retrieve);
app.post('/registro_detail', jwtMiddleware, RegistroDetalleController.create);
app.delete('/registro_detail/:id/', jwtMiddleware, RegistroDetalleController.delete);

app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})

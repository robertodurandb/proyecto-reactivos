const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const Dotenv = require('dotenv')

const { AreaController } = require('./controllers/areacontroller')
const { UserController } = require('./controllers/usercontroller')

Dotenv.config();

const app = express()

app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: process.env.USER,
    password: 'Ingenieria2023',
    database: 'dbexamenes'
}
//middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//rutas********************************

app.get('/areas', AreaController.list);
app.get('/area/:id', AreaController.retrieve);
app.post('/area', AreaController.create);
app.delete('/area/:id', AreaController.delete);
app.put('/area/:id', AreaController.update);

app.get('/usuarios', UserController.list);
app.get('/usuario/:id',UserController.retrieve);
app.post('/usuario', UserController.create);
app.delete('/usuario/:id', UserController.delete);
app.put('/usuario/:id', UserController.update);

app.post('/login', UserController.login);


app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
    console.log(process.env.USER)
    console.log(process.env.PASSWORD)
    console.log(process.env.DATABASE)
})

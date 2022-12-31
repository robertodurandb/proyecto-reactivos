const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const { AreaController } = require('./controllers/areacontroller')
const { UserController } = require('./controllers/usercontroller')

const app = express()

app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
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
app.post('/usuario', UserController.create);


app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})

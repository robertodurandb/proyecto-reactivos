const express = require('express')
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const routes = require('./routes')

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

//rutas
app.get('/',(req, res)=>{
    res.send('hello world')
})
app.use('/api', routes)


app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})

const express = require('express');
const bcrypt = require ('bcrypt');

class UserController {
    static list (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
            conn.query('SELECT * FROM usuario', (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
            })
        })

    }
    static create (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
            let data = req.body;

            bcrypt.genSalt(10, (err, salt) =>{
                bcrypt.hash(data.password, salt, (err, newPassword) =>{
                    data.password = newPassword

                conn.query('INSERT INTO usuario set ?', [data], (err, rows)=>{
                    if(err) return res.send(err)
            
                    res.send('user added!')
                })
                })
            })
        })
    }


}

module.exports = { UserController }
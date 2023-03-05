const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController {

    static login(req, res) {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)

            let username = req.body.username;
            let password = req.body.password;

            conn.query('SELECT * FROM usuario WHERE dniuser = ? AND estado = "A"', [username], function(error, results, fields) {
                    
                if (error){
                    res.send({          
                        "code":400,          
                        "failed":"error occurred",          
                        "error" : error        
                        })        
                }else{
                    if(results.length>0){
                        bcrypt.compare(req.body.password, results[0].password, function(err, result){
                        if(result) {
                            let payload = {
                                id: results[0].iduser,
                                username: results[0].dniuser
                            }
                            const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '3600s'});
                            return res.status(200).send({ token : token });
                            
                        }else{
                            return res.status(401).send({ message: "Invalid Password"});
                        }

                        });
                    }else{
                        return res.status(401).send({ message: "Invalid User"});
                    }
                } 
                
            })
        })
    }

    static list(req, res) {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            conn.query('SELECT * FROM usuario', (err, rows) => {
                if (err) return res.send(err)

                res.json(rows)
            })
        })

    }
    static retrieve(req, res) {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)

            conn.query('SELECT * FROM usuario WHERE iduser = ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)

                res.json(rows)
            })
        })
    }
    static create(req, res) {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)
            let data = req.body;

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(data.password, salt, (err, newPassword) => {
                    data.password = newPassword

                    conn.query('INSERT INTO usuario set ?', [data], (err, rows) => {
                        if (err) return res.send(err)

                        res.send('user added!')
                    })
                })
            })
        })
    }
    static delete(req, res) {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)

            conn.query('DELETE FROM usuario WHERE iduser = ?', [req.params.id], (err, rows) => {
                if (err) return res.send(err)

                res.send('user deleted!')
            })
        })
    }
    static update(req, res) {
        req.getConnection((err, conn) => {
            if (err) return res.send(err)

            conn.query('UPDATE usuario set ? WHERE iduser = ?', [req.body, req.params.id], (err, rows) => {
                if (err) return res.send(err)

                res.send('user updated!')
            })
        })
    }


}

module.exports = { UserController }
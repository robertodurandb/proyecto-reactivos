class PerfilExamenController {
    static list (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM perfil_has_examen', (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
                
            })
        })
    }
    static retrieve (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM perfil_has_examen WHERE examen_idexamen AND perfil_idperfil = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
            })
        })
    }
    
    static create (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('INSERT INTO perfil_has_examen set ?', [req.body], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('perfil_has_examen added!')
            })
        })
    }
    static delete (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('DELETE FROM perfil_has_examen WHERE examen_idexamen AND perfil_idperfil = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('perfil_has_examen deleted!')
            })
        })
    }
    static update (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('UPDATE perfil_has_examen set ? WHERE examen_idexamen AND perfil_idperfil = ?', [req.body, req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('perfil_has_examen updated!')
            })
        })
    }
}

module.exports = {PerfilExamenController}
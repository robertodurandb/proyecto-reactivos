class RegistroDetalleController {
    static list (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM examen_has_registro', (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
                
            })
        })
    }
    static retrieve (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM examen_has_registro WHERE registro_idregistro = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
            })
        })
    }
    
    static create (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('INSERT INTO examen_has_registro set ?', [req.body], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('registro_detalle added!')
            })
        })
    }
    static delete (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('DELETE FROM examen_has_registro WHERE registro_idregistro = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('registro_detalle deleted!')
            })
        })
    }
    
}
module.exports = {RegistroDetalleController}
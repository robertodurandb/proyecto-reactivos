class EstadoController {
    static list (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM estado', (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
                
            })
        })
    }
    static retrieve (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM estado WHERE idestado = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
            })
        })
    }

}
module.exports = {EstadoController}
class ProveedorExamenController {
    static list (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM examen_has_proveedor', (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
                
            })
        })
    }
    static retrieve (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM examen_has_proveedor WHERE examen_idexamen AND proveedor_idproveedor = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
            })
        })
    }
    
    static create (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('INSERT INTO examen_has_proveedor set ?', [req.body], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('examen_proveedor added!')
            })
        })
    }
    static delete (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('DELETE FROM examen_has_proveedor WHERE examen_idexamen AND proveedor_idproveedor = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('examen_proveedor deleted!')
            })
        })
    }
    static update (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('UPDATE examen_has_proveedor set ? WHERE examen_idexamen AND proveedor_idproveedor = ?', [req.body, req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('examen_proveedor updated!')
            })
        })
    }
}
module.exports = {ProveedorExamenController}
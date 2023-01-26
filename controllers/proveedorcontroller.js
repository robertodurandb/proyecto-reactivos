class ProveedorController {

    static list (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM proveedor', (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
                
            })
        })
    }
    static retrieve (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM proveedor WHERE idproveedor = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
            })
        })
    }
    static retrieve_by_proveedor(req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
            conn.query('SELECT * FROM examen WHERE proveedor_idproveedor = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)

                res.json(rows)
            })
        })
    }
    static create (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('INSERT INTO proveedor set ?', [req.body], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('proveedor added!')
            })
        })
    }
    static delete (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('DELETE FROM proveedor WHERE idproveedor = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('proveedor deleted!')
            })
        })
    }
    static update (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('UPDATE proveedor set ? WHERE idproveedor = ?', [req.body, req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('proveedor updated!')
            })
        })
    }

}

module.exports = {ProveedorController}
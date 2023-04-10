class TipomuestraController {
    static list (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM tipomuestra', (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
                
            })
        })
    }
    static retrieve (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM tipomuestra WHERE idtipomuestra = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
            })
        })
    }
    static create (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('INSERT INTO tipomuestra set ?', [req.body], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('tipo de muestra added!')
            })
        })
    }
    static delete (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('DELETE FROM tipomuestra WHERE idtipomuestra = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('tipo de muestra deleted!')
            })
        })
    }
    static update (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('UPDATE tipomuestra set ? WHERE idtipomuestra = ?', [req.body, req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('tipo de muestra updated!')
            })
        })
    }


}

module.exports = { TipomuestraController }
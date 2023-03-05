
class ExamenController {
    static list (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM examen as e INNER JOIN area as a ON e.area_idarea = a.idarea INNER JOIN estado as s ON e.estado = s.idestado INNER JOIN tipomuestra as t ON t.idtipomuestra = e.tipomuestra_idtipomuestra', (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
                
            })
        })
    }
    static retrieve (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('SELECT * FROM examen as e INNER JOIN area as a ON e.area_idarea = a.idarea INNER JOIN estado as s ON e.estado = s.idestado INNER JOIN tipomuestra as t ON t.idtipomuestra = e.tipomuestra_idtipomuestra WHERE idexamen = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.json(rows)
            })
        })
    }
    static create (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('INSERT INTO examen set ?', [req.body], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('examen added!')
            })
        })
    }
    static delete (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('DELETE FROM examen WHERE idexamen = ?', [req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('examen deleted!')
            })
        })
    }
    static update (req, res){
        req.getConnection((err, conn)=>{
            if(err) return res.send(err)
    
            conn.query('UPDATE examen set ? WHERE idexamen = ?', [req.body, req.params.id], (err, rows)=>{
                if(err) return res.send(err)
    
                res.send('examen updated!')
            })
        })
    }

}

module.exports = {ExamenController}
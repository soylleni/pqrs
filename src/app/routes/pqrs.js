const dbConnection = require('../../config/dbConnection');

module.exports = app => {

const connection = dbConnection();


app.get('/', (req, res) => {
  connection.query('SELECT * FROM pqrs', (err, result) => {
    console.log(result.apellido_solic)
    res.render('pqrs/pqrs', {
      pqrs: result
    });
  });
});




app.post('/pqrs', (req, res) => {
  console.log(req.body)
  const { documento,
    tipo_documento,
    nombre_solic,
    apellido_solic,
    celular_solic,
    fijo_solic,
    email_solic,
    pqrs_titulo,
    pqrs_tipo, 
    pqrs_cuerpo,
    pqrs_estado } = req.body;

    connection.query('INSERT INTO pqrs SET ? ',
    {
      documento,
      tipo_documento,
      nombre_solic,
      apellido_solic,
      celular_solic,
      fijo_solic,
      email_solic,
      pqrs_titulo,
      pqrs_tipo, 
      pqrs_cuerpo,
      pqrs_estado
    }
    , (err, result) => {
      if (err) {
        console.error('Error al insertar datos:', err);
        res.status(500).send('Ocurrió un error al procesar la solicitud.');
      } else {
        console.log('Datos insertados correctamente.');
        res.redirect('/');}
    });
  });

  app.delete('/pqrs/:id', (req, res) => {
    const id = req.params.id;
  
    connection.query('DELETE FROM pqrs WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).send('Ocurrió un error al procesar la solicitud.');
      } else {
        console.log('Registro eliminado correctamente.');
        res.status(200).send('Registro eliminado correctamente.');
      }
    });
  });


  app.get('/login', (req, res) => {
    connection.query('SELECT * FROM login', (err, result) => {
      console.log(result)
      res.render('pqrs/login', {
        pqrs: result
      });
    });
  });

  app.post('/login', (req, res) => {
    const { userName, password } = req.body;
    const values = [userName, password]

    const sql = 'SELECT * FROM usuario where userName = ? and password = ?'
    connection.query(sql, values,(err, result) => {
      if (err) {
        res.status(500).send(err)
      } else {
        if (result.length > 0) {
          res.redirect('/adminpqrs');
          
        } else {
          res.status(400).send('Usuario no existe !')
        }
      }
    })
 
  });

  app.get('/adminpqrs', (req, res) => {
    connection.query('SELECT * FROM pqrs', (err, result) => {
      console.log(result.apellido_solic)
      res.render('pqrs/adminpqrs', {
        pqrs: result
      });
    });
  });



}

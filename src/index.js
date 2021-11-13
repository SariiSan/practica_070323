const express = require('express');
const app =express();

//Configuracion
app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(express.json());


//Routes
app.use(require('src/routes/empleados'));


//Starting the server
app.listen(app.get('port'), () => {
    console.loEmleadosg('Servicio iniciado en el puerto', app.get('port'));
});
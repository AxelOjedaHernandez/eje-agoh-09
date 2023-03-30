//declaraciones
const { request, response } = require('express');
const servidorHTTP = require('express');
const app = servidorHTTP();
const port = process.env.PORT || 3000;

//configuraciones - respuestas para el cliente(chrome, explore)
app.get("/",(request, response)=>{
    response.send('pagina principal. Servidor en node.js con expres');
});

app.get('*',(req,res)=>{
    res.send('404 ERROR | Pagina no encontrada');
});

//procesos - respuestas para el desarrollador
app.listen(port,()=>{
    console.log('servidor corriendo en el puerto', port);
});
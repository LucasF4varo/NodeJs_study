const { response } = require('express');
const express = require('express');

const app = express();

/**
 * Get- Buscar uma informação dentro do servidor
Post - Inserir uma informação no servidor
Put - Alterar uma informação no servidor
Patch - Alterar uma informação especifica
Delete - Deletar uma informação no servidor



Tipos de Parâmetros

Route Params => Identificar um recurso para editar/deletar/buscar

Query Params => Paginação / Filtro 

Body Params => Objetos para inserção ou alteração de algum recurso. (JSON)


 */
app.use(express.json());

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);
   return response.json(["Curso 1","Curso 2","Curso 3"]);
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body)
    return response.json(["Curso 1","Curso 2","Curso 3", "Curso 4"])
});

app.put("/courses/:id", (request, response) => {
    const { id } = request.params;
    console.log(id);
    return response.json(["Curso 1.0","Curso 2","Curso 3", "Curso 4"])
});

app.patch("/courses/:id",(request, response) => {
    return response.json(["Curso 1.0","Curso 2.0","Curso 3", "Curso 4"])
});

app.delete("/courses/:id", (request, response) =>{
    return response.json(["Curso 1.0","Curso 2.0", "Curso 4"])
})



app.listen(3333);
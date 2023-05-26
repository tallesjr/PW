const express = require('express');

const server = express();

server.use(express.json())

///localhost:5000/produtos              ////LISTA TODAS AS PEÇAS
///localhost:5000/produtos/2            ////LISTA UMA UNICA PEÇA PEGANDO O INDICE DO ARRAY    

const peçasArray=['Disco de freio','Pistão', 'Cabeçote', 'Velas de ignição', 'Bloco do motor']


////PEGA UMA PEÇA UNICA
server.get('/produtos/:indiceInput', (req, res) => {

    const{indiceInput} = req.params
    return res.json({ peça: `o ID da peça comprada foi: ${peçasArray[indiceInput]}` })
})


////PEGA TODAS AS PEÇAS DA LISTA
server.get('/produtos', (req, res) =>{

    return res.json(peçasArray)
})

////CRIA UMA NOVA PEÇA - PUT
server.post('/produto', (req, res) =>{

    const{nomePeça} = req.body;

    peçasArray.push(nomePeça);

    return res.json(peçasArray);

})
////ALTERA UMA PEÇA DO ARRAY
server.put('/produtos/:indice', (req, res) =>{

    const {indice} = req.params;
    const {nomePeça} = req.body;

    peçasArray[indice]= nomePeça;

    return res.json(peçasArray);

})

server.delete('/produtos/:indice', (req, res) =>{

    const {indice} = req.params;

    peçasArray.splice(indice,1);

    return res.json(peçasArray);
})








server.listen(5000);